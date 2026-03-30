'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Send, FileText, Layers, PenTool, BookOpen, Lock } from 'lucide-react';

export function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(false);
    const dropped = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...dropped]);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave() {
    setDragActive(false);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form Column - 60% */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 md:p-10 shadow-sm">
              <h2 className="font-display text-3xl font-bold text-[var(--blue-900)] mb-2">
                Request a Quote
              </h2>
              <p className="text-sm text-[var(--muted-foreground)] mb-10">
                Complete RFQs receive a same-day quote turnaround.
              </p>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                {/* Section 1: Upload Files */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--blue-900)] mb-1">
                    1. Upload Files
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] mb-4">
                    Attach your BOM, Gerber files, and any supporting documents.
                  </p>
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-colors duration-200 ${
                      dragActive
                        ? 'border-[var(--primary)] bg-[var(--blue-50)]'
                        : 'border-[var(--primary)]/40 hover:border-[var(--primary)] hover:bg-[var(--blue-50)]'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".xlsx,.csv,.zip,.pdf,.doc,.docx,.rar,.7z,.gbr,.drl,.brd,.bom"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Upload className="mx-auto h-10 w-10 text-[var(--primary)] opacity-60 mb-3" />
                    <p className="text-sm font-medium text-[var(--blue-900)]">
                      Drop files here or{' '}
                      <span className="text-[var(--primary)] underline underline-offset-2">browse</span>
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      .xlsx, .csv, .zip, .pdf, .doc — up to 25 MB each
                    </p>
                  </div>
                  {files.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {files.map((file, i) => (
                        <div
                          key={`${file.name}-${i}`}
                          className="flex items-center justify-between rounded-lg bg-[var(--blue-50)] px-4 py-2 text-sm"
                        >
                          <span className="truncate text-[var(--blue-900)]">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="ml-3 text-[var(--muted-foreground)] hover:text-[var(--destructive)] transition-colors text-xs font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Section 2: Your Information */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--blue-900)] mb-1">
                    2. Your Information
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] mb-4">
                    Tell us how to reach you.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Electronics Inc."
                        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Project Details */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--blue-900)] mb-1">
                    3. Project Details
                  </h3>
                  <p className="text-xs text-[var(--muted-foreground)] mb-4">
                    Help us understand the scope of your project.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Project / Part Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Main Controller Board"
                        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Board / GMP Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. PCB-2024-001"
                        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Assembly Type
                      </label>
                      <select className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all appearance-none">
                        <option value="">Select type...</option>
                        <option value="turnkey">Turnkey</option>
                        <option value="assembly-only">Assembly Only</option>
                        <option value="consignment">Consignment</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Quantity *
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="e.g. 100"
                        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                        Target Date
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-medium text-[var(--muted-foreground)] block mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Special requirements, compliance needs, packaging preferences, or anything else we should know..."
                      className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--blue-900)] placeholder:text-[var(--muted-foreground)]/50 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Quote Request
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar Column - 40% */}
          <div className="lg:col-span-2 space-y-6">
            {/* What to Include */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <h3 className="font-display text-base font-semibold text-[var(--blue-900)] mb-4">
                What to Include
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: FileText, text: 'Bill of Materials (BOM)' },
                  { icon: Layers, text: 'Gerber Files' },
                  { icon: PenTool, text: 'Assembly Drawing' },
                  { icon: BookOpen, text: 'Datasheets (if applicable)' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="flex h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                    <span className="text-sm text-[var(--muted-foreground)]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Happens Next */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
              <h3 className="font-display text-base font-semibold text-[var(--blue-900)] mb-4">
                What Happens Next
              </h3>
              <ol className="space-y-4">
                {[
                  'Review BOM & Gerbers',
                  'Price components and calculate assembly costs',
                  'You receive a quote with 4 quantity levels within 24 hours',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-white text-xs font-semibold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[var(--muted-foreground)] pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Security Note */}
            <div className="rounded-2xl bg-[var(--blue-900)] p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="h-4 w-4 text-[var(--blue-100)]" />
                <span className="text-xs font-medium text-[var(--blue-100)] uppercase tracking-wider">
                  Secure
                </span>
              </div>
              <p className="text-sm leading-relaxed text-blue-100">
                Your files are encrypted and sent securely. Prefer email?{' '}
                <a
                  href="mailto:sales@rspcbassembly.com"
                  className="text-white underline underline-offset-2 hover:no-underline font-medium"
                >
                  sales@rspcbassembly.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
