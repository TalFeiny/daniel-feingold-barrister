'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

const enquiryTypes = [
  'Tax Residence & Domicile Planning',
  'HMRC Dispute or Investigation',
  'Corporate Restructuring / M&A',
  'Employee Incentives / EOTs',
  'Inheritance Tax Planning',
  'Capital Gains Tax',
  'Offshore Structuring',
  'IR35 / Off-Payroll Working',
  'Transfer Pricing',
  'International Tax Planning',
  'Other Tax Matter',
]

interface FormState {
  name: string
  email: string
  phone: string
  firm: string
  enquiryType: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY: FormState = {
  name: '',
  email: '',
  phone: '',
  firm: '',
  enquiryType: '',
  message: '',
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-[0.7rem] font-medium tracking-widest uppercase text-gray-500 mb-1.5"
    >
      {children}
    </label>
  )
}

const inputClass =
  'w-full bg-white border border-gray-200 rounded-sm px-4 py-2.5 text-sm text-gray-800 ' +
  'placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || data.error) {
        setErrorMsg(
          data.error ?? 'Something went wrong. Please try again or email us directly.',
        )
        setStatus('error')
      } else {
        setStatus('success')
        setForm(EMPTY)
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_340px] gap-16 items-start">

          {/* ── Form ── */}
          <div>
            <span className="section-label">Enquiries</span>
            <h2 id="contact-heading" className="section-title">Instruct Daniel Feingold</h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
              Daniel accepts instructions from solicitors, accountants, and other regulated
              professionals, as well as directly from clients under Direct Access rules.
              Complete the form and the clerks will respond within one business day.
            </p>

            {status === 'success' ? (
              <div className="border border-green-200 bg-green-50 rounded-sm p-10 text-center">
                <div className="w-10 h-10 rounded-full bg-green-100 border border-green-300 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-navy mb-2">Enquiry Received</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Thank you for your enquiry. Burnell Chambers' clerks will respond within
                  one business day. For urgent matters please call{' '}
                  <a href="tel:+442035761203" className="text-gold underline underline-offset-2 hover:text-gold-light">
                    020 3576 1203
                  </a>.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-[0.75rem] text-gray-400 hover:text-navy underline underline-offset-2 transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone + Firm */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telephone</Label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="+44 20 0000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <Label htmlFor="firm">Firm / Organisation</Label>
                    <input
                      id="firm" name="firm" type="text"
                      value={form.firm} onChange={handleChange}
                      placeholder="Your firm or company"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Enquiry type */}
                <div>
                  <Label htmlFor="enquiryType">Nature of Enquiry *</Label>
                  <select
                    id="enquiryType" name="enquiryType" required
                    value={form.enquiryType} onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" disabled>Select an area of law…</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Brief Details *</Label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Please provide a brief summary of your matter. All enquiries are treated in strict confidence."
                    className={`${inputClass} resize-y min-h-[120px]`}
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-sm px-4 py-3 text-sm text-red-700">
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <div className="flex items-center gap-5 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
                  </button>
                  <p className="text-[0.7rem] text-gray-400 leading-snug">
                    Strictly confidential. Fields marked * are required.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* ── Aside ── */}
          <div className="space-y-4 md:pt-20">
            {/* Clerks card */}
            <div className="bg-navy text-white rounded-sm p-6">
              <h3 className="font-serif text-lg mb-0.5">Burnell Chambers Clerks</h3>
              <p className="text-white/45 text-xs mb-5 tracking-wide">Monday – Friday · 9:00am – 6:00pm</p>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gold text-[0.63rem] uppercase tracking-wider mb-1">Address</dt>
                  <dd className="text-white/70 leading-relaxed">
                    1A Middle Temple Lane<br />London EC4Y 9AA
                  </dd>
                </div>
                <hr className="border-white/8" />
                <div>
                  <dt className="text-gold text-[0.63rem] uppercase tracking-wider mb-1">Clerks</dt>
                  <dd>
                    <a href="tel:+442035761203" className="text-white/70 hover:text-gold-light transition-colors block">
                      020 3576 1203
                    </a>
                  </dd>
                </div>
                <hr className="border-white/8" />
                <div>
                  <dt className="text-gold text-[0.63rem] uppercase tracking-wider mb-1">Direct Line</dt>
                  <dd>
                    <a href="tel:+441618269496" className="text-white/70 hover:text-gold-light transition-colors block">
                      0161 826 9496
                    </a>
                  </dd>
                </div>
                <hr className="border-white/8" />
                <div>
                  <dt className="text-gold text-[0.63rem] uppercase tracking-wider mb-1">Email</dt>
                  <dd>
                    <a href="mailto:clerks@burnellchambers.co.uk" className="text-white/70 hover:text-gold-light transition-colors text-xs">
                      clerks@burnellchambers.co.uk
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Who can instruct */}
            <div className="bg-cream border border-black/6 rounded-sm p-6">
              <h3 className="font-serif text-navy text-base mb-3">Who Can Instruct</h3>
              <ul className="space-y-2">
                {[
                  'Solicitors & law firms',
                  'Accountants & accountancy practices',
                  'Private equity & venture capital firms',
                  'Wealth managers & private banks',
                  'Corporate clients (direct)',
                  'HNW individuals (Direct Access)',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 items-center text-sm text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
