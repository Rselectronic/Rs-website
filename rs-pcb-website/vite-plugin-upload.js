import fs from 'fs'
import path from 'path'

/**
 * Vite plugin that adds a local API endpoint for uploading images.
 * During `npm run dev`, this creates a POST /api/upload route that
 * saves images to public/Articles/ so they persist as real files.
 */
export default function uploadPlugin() {
  return {
    name: 'vite-plugin-upload',
    configureServer(server) {
      server.middlewares.use('/api/upload', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        try {
          const chunks = []
          for await (const chunk of req) {
            chunks.push(chunk)
          }
          const body = Buffer.concat(chunks)

          // Parse multipart form data manually (simple single-file parser)
          const contentType = req.headers['content-type'] || ''
          const boundaryMatch = contentType.match(/boundary=(.+)/)
          if (!boundaryMatch) {
            res.statusCode = 400
            res.end(JSON.stringify({ error: 'No boundary in content-type' }))
            return
          }

          const boundary = boundaryMatch[1]
          const parts = parseMultipart(body, boundary)
          const filePart = parts.find((p) => p.filename)

          if (!filePart) {
            res.statusCode = 400
            res.end(JSON.stringify({ error: 'No file found in upload' }))
            return
          }

          // Sanitize filename
          const safeName = filePart.filename
            .toLowerCase()
            .replace(/[^a-z0-9._-]/g, '-')
            .replace(/-+/g, '-')

          // Add timestamp to avoid conflicts
          const ext = path.extname(safeName)
          const base = path.basename(safeName, ext)
          const finalName = `${base}-${Date.now()}${ext}`

          // Ensure public/Articles/ exists
          const uploadDir = path.resolve(process.cwd(), 'public', 'Articles')
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true })
          }

          // Write file
          const filePath = path.join(uploadDir, finalName)
          fs.writeFileSync(filePath, filePart.data)

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({
            success: true,
            path: `/Articles/${finalName}`,
            filename: finalName,
          }))
        } catch (err) {
          console.error('Upload error:', err)
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'Upload failed' }))
        }
      })
    },
  }
}

/**
 * Simple multipart form data parser
 */
function parseMultipart(body, boundary) {
  const parts = []
  const boundaryBuffer = Buffer.from(`--${boundary}`)
  const endBuffer = Buffer.from(`--${boundary}--`)

  let start = indexOf(body, boundaryBuffer, 0)
  if (start === -1) return parts

  while (true) {
    start += boundaryBuffer.length + 2 // skip boundary + \r\n

    const end = indexOf(body, boundaryBuffer, start)
    if (end === -1) break

    const partData = body.subarray(start, end - 2) // -2 for \r\n before boundary

    // Split headers and body
    const headerEnd = indexOf(partData, Buffer.from('\r\n\r\n'), 0)
    if (headerEnd === -1) continue

    const headerStr = partData.subarray(0, headerEnd).toString('utf-8')
    const partBody = partData.subarray(headerEnd + 4)

    const part = { headers: headerStr, data: partBody }

    // Parse filename from Content-Disposition
    const filenameMatch = headerStr.match(/filename="([^"]+)"/)
    if (filenameMatch) {
      part.filename = filenameMatch[1]
    }

    // Parse field name
    const nameMatch = headerStr.match(/name="([^"]+)"/)
    if (nameMatch) {
      part.name = nameMatch[1]
    }

    parts.push(part)
  }

  return parts
}

function indexOf(buf, search, offset) {
  for (let i = offset; i <= buf.length - search.length; i++) {
    let found = true
    for (let j = 0; j < search.length; j++) {
      if (buf[i + j] !== search[j]) {
        found = false
        break
      }
    }
    if (found) return i
  }
  return -1
}
