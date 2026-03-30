/**
 * File Encryption Utility — AES-256-CBC
 * --------------------------------------
 * Encrypts files in the browser using the Web Crypto API before
 * sending them to the server. The server decrypts with the same key.
 *
 * Flow:
 *  1. File → ArrayBuffer → AES-256-CBC encrypt → Base64 string
 *  2. Base64 string sent in JSON body to PHP backend
 *  3. PHP decrypts with matching key and attaches to email
 */

const ENCRYPT_KEY = 'RS-PCB-2026-SecureFileTransfer!' // Must match PHP key

/**
 * Derive a 256-bit AES key from the passphrase using SHA-256
 */
async function deriveKey(passphrase) {
  const encoder = new TextEncoder()
  const keyMaterial = encoder.encode(passphrase)
  const hash = await crypto.subtle.digest('SHA-256', keyMaterial)
  return crypto.subtle.importKey('raw', hash, { name: 'AES-CBC' }, false, ['encrypt'])
}

/**
 * Encrypt a File object and return a base64-encoded string.
 * Format: [16-byte IV][ciphertext] → base64
 */
export async function encryptFile(file) {
  // Read file as ArrayBuffer
  const arrayBuffer = await file.arrayBuffer()

  // Generate random 16-byte IV
  const iv = crypto.getRandomValues(new Uint8Array(16))

  // Derive AES key from passphrase
  const key = await deriveKey(ENCRYPT_KEY)

  // Encrypt
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-CBC', iv },
    key,
    arrayBuffer
  )

  // Combine IV + ciphertext
  const combined = new Uint8Array(iv.length + ciphertext.byteLength)
  combined.set(iv, 0)
  combined.set(new Uint8Array(ciphertext), iv.length)

  // Convert to base64
  let binary = ''
  const bytes = combined
  const chunkSize = 8192
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.slice(i, i + chunkSize))
  }
  return btoa(binary)
}

/**
 * Encrypt multiple files and return an array of { name, data, type } objects
 */
export async function encryptFiles(files) {
  const encrypted = []
  for (const file of files) {
    const data = await encryptFile(file)
    encrypted.push({
      name: file.name,
      data,
      type: file.type || 'application/octet-stream',
    })
  }
  return encrypted
}
