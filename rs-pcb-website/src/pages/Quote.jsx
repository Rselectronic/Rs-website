import { useState } from 'react'
import { Upload, FileText, X, Send, CheckCircle, ArrowRight, Info, Shield, Loader2, AlertCircle } from 'lucide-react'
import { encryptFiles } from '../utils/fileCrypto'

const assemblyTypes = ['Turnkey', 'Assembly Only', 'Consignment']

const API_URL = import.meta.env.PROD
  ? 'https://rspcbassembly.com/new/api/send-quote.php'
  : '/api/send-quote.php'

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [progress, setProgress] = useState('')
  const [files, setFiles] = useState([])
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    projectName: '', boardName: '', assemblyType: '',
    quantity: '', targetDate: '', details: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleFileChange = (e) => setFiles((prev) => [...prev, ...Array.from(e.target.files)])
  const removeFile = (i) => setFiles((prev) => prev.filter((_, idx) => idx !== i))
  const handleDrop = (e) => { e.preventDefault(); setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)]) }

  const fmt = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)
    try {
      let encryptedFiles = []
      if (files.length > 0) {
        setProgress('Encrypting files...')
        encryptedFiles = await encryptFiles(files)
      }
      setProgress('Sending quote request...')
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, files: encryptedFiles }),
      })
      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Submit error:', err)
      setError('Failed to send. Please email us directly at apatel@rspcbassembly.com')
    } finally {
      setSending(false)
      setProgress('')
    }
  }

  if (submitted) {
    return (
      <>
        <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8" />
        </section>
        <section className="section-padding bg-white">
          <div className="max-w-xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-pcb-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-sierra-900 mb-3">Quote Request Received</h2>
            <p className="text-gray-500 text-lg">
              Thank you, {form.name}. We have received your files and will send a detailed quote within 24 hours.
            </p>
            <p className="mt-3 text-gray-400 text-sm">
              A confirmation has been sent to <strong>{form.email}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setForm({ name: '', email: '', company: '', phone: '', projectName: '', boardName: '', assemblyType: '', quantity: '', targetDate: '', details: '' })
                setFiles([])
              }}
              className="mt-8 btn-primary"
            >
              Submit Another Quote <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-pcb-400 uppercase tracking-wider">Request a Quote</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Upload Your Files,<br />
              <span className="text-pcb-400">Get Your Quote</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl">
              Upload your BOM and Gerber files. We review your project and send a detailed quote with pricing at multiple quantity levels — within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">

                <div>
                  <h2 className="text-xl font-bold text-sierra-900 mb-1">1. Upload Your Design Files</h2>
                  <p className="text-sm text-gray-500 mb-4">Drag and drop or click to browse. We accept BOM, Gerber, assembly drawings, and datasheets.</p>
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-pcb-300 bg-pcb-50/30 rounded-xl p-8 text-center hover:border-pcb-500 hover:bg-pcb-50 transition-all cursor-pointer"
                    onClick={() => document.getElementById('file-input').click()}
                  >
                    <Upload className="w-10 h-10 text-pcb-400 mx-auto mb-3" />
                    <p className="text-sm font-semibold text-sierra-900">
                      Drop files here or <span className="text-pcb-600">browse</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">.xlsx, .csv, .zip, .pdf, .doc — up to 25 MB each</p>
                    <input id="file-input" type="file" multiple onChange={handleFileChange} className="hidden" accept=".xlsx,.xls,.csv,.pdf,.zip,.rar,.7z,.doc,.docx,.dxf,.dwg,.brd,.gbr,.gtl,.gbl" />
                  </div>
                  {files.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {files.map((file, i) => (
                        <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-pcb-500 flex-shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-gray-700">{file.name}</p>
                              <p className="text-xs text-gray-400">{fmt(file.size)}</p>
                            </div>
                          </div>
                          <button type="button" onClick={() => removeFile(i)} className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-sierra-900 mb-4">2. Your Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-red-400">*</span></label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Company <span className="text-red-400">*</span></label>
                      <input type="text" name="company" required value={form.company} onChange={handleChange} className="input-field" placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="+1 (xxx) xxx-xxxx" />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-sierra-900 mb-4">3. Project Details</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Project / Part Name</label>
                      <input type="text" name="projectName" value={form.projectName} onChange={handleChange} className="input-field" placeholder="e.g., Sensor Board v2.1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Board / GMP Number</label>
                      <input type="text" name="boardName" value={form.boardName} onChange={handleChange} className="input-field" placeholder="e.g., PCB-2024-001" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Assembly Type <span className="text-red-400">*</span></label>
                      <select name="assemblyType" required value={form.assemblyType} onChange={handleChange} className="input-field">
                        <option value="">Select type</option>
                        {assemblyTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity <span className="text-red-400">*</span></label>
                      <input type="text" name="quantity" required value={form.quantity} onChange={handleChange} className="input-field" placeholder="e.g., 10, 50, 100, 500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Target Date</label>
                      <input type="date" name="targetDate" value={form.targetDate} onChange={handleChange} className="input-field" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details</label>
                    <textarea name="details" rows={3} value={form.details} onChange={handleChange} className="input-field resize-none" placeholder="Special requirements, testing needs, packaging preferences..." />
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-800">{error}</p>
                      <p className="text-xs text-red-600 mt-1">
                        You can also email us directly at{' '}
                        <a href="mailto:apatel@rspcbassembly.com" className="underline">apatel@rspcbassembly.com</a>
                      </p>
                    </div>
                  </div>
                )}

                <button type="submit" disabled={sending} className="btn-primary w-full md:w-auto text-sm px-8 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? (
                    <span className="flex items-center">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {progress || 'Sending...'}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-4 h-4 mr-2" /> Submit Quote Request
                    </span>
                  )}
                </button>

              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-5">

                <div className="bg-pcb-50 border border-pcb-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Info className="w-5 h-5 text-pcb-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-sm font-semibold text-sierra-900">What to Include</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-pcb-500 rounded-full flex-shrink-0 mt-1.5" />
                      <span><strong>BOM</strong> — Part numbers, descriptions, quantities, designators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-pcb-500 rounded-full flex-shrink-0 mt-1.5" />
                      <span><strong>Gerber Files</strong> — Complete fabrication data (zipped)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-pcb-500 rounded-full flex-shrink-0 mt-1.5" />
                      <span><strong>Assembly Drawing</strong> — Component placement and orientation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-pcb-500 rounded-full flex-shrink-0 mt-1.5" />
                      <span><strong>Datasheets</strong> — For custom or hard-to-source parts</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-sierra-900 mb-3">What Happens Next</h3>
                  <ol className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-pcb-600 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <span>We review your BOM and Gerbers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-pcb-600 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <span>We price components and calculate assembly costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-pcb-600 text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <span>You receive a quote with 4 quantity levels within 24 hours</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-sierra-950 rounded-xl p-6 text-center">
                  <Shield className="w-6 h-6 text-pcb-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-xs">Your files are encrypted and sent securely.</p>
                  <p className="text-gray-500 text-xs mt-1">Prefer email?</p>
                  <a href="mailto:apatel@rspcbassembly.com" className="inline-block mt-1.5 text-white font-semibold text-sm hover:text-pcb-400 transition-colors">
                    apatel@rspcbassembly.com
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
