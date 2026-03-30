import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', subject: '', message: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submission:', form)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-sierra-950 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-pcb-400 uppercase tracking-wider">Contact Us</span>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's <span className="text-pcb-400">Talk</span>
            </h1>
            <p className="mt-5 text-lg text-gray-400 leading-relaxed max-w-xl">
              Have a question about our services, need a quote, or want to
              discuss a project? We respond fast.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-sierra-900 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Address', content: '5580 Vanden Abeele\nSaint-Laurent, QC H4S 1P9\nCanada' },
                  { icon: Phone, label: 'Phone', content: '+1 (438) 833-8477', href: 'tel:+14388338477' },
                  { icon: Mail, label: 'Email', content: 'apatel@rspcbassembly.com', href: 'mailto:apatel@rspcbassembly.com' },
                  { icon: Clock, label: 'Hours', content: 'Monday – Friday: 8:00 AM – 5:00 PM EST\nSaturday – Sunday: Closed' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pcb-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-pcb-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-sierra-900">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-gray-500 mt-1 hover:text-pcb-600 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-500 mt-1 whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-10 aspect-video rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=R.S%20Electronics%205580%20Rue%20Vanden%20Abeele%2C%20Saint-Laurent%2C%20QC%20H4S%201R9%2C%20Canada&t=m&z=14&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RS PCB Assembly Location"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-pcb-50 border border-pcb-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-12 h-12 text-pcb-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-sierra-900 mb-2">Message Sent</h3>
                  <p className="text-gray-600">We'll get back to you within one business day.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' }); }}
                    className="mt-6 text-pcb-600 font-semibold text-sm hover:text-pcb-500 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
                  <h2 className="text-2xl font-bold text-sierra-900 mb-6">Send Us a Message</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name <span className="text-red-400">*</span></label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-400">*</span></label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} className="input-field" placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input-field" placeholder="+1 (xxx) xxx-xxxx" />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject <span className="text-red-400">*</span></label>
                    <select name="subject" required value={form.subject} onChange={handleChange} className="input-field">
                      <option value="">Select a topic</option>
                      <option value="quote">Request a Quote</option>
                      <option value="order">Order Status</option>
                      <option value="technical">Technical Question</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-400">*</span></label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange} className="input-field resize-none" placeholder="Tell us about your project or question..." />
                  </div>
                  <button type="submit" className="mt-6 btn-primary w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
