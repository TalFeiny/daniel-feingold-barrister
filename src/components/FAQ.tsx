'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What does Daniel Feingold specialise in?',
    a: 'Daniel Feingold is a specialist Tax Barrister at Burnell Chambers with over 30 years\' experience in UK and international tax law. His core practice covers tax residence and domicile planning, HMRC disputes and investigations, corporate restructuring (MBOs, M&A), offshore structuring, capital gains tax, inheritance tax planning, employee share incentives (EMI, CSOP, EOTs), transfer pricing, and IR35.',
  },
  {
    q: 'Who can instruct Daniel Feingold?',
    a: 'Daniel accepts instructions from solicitors, accountants, private equity firms, wealth managers, and corporate clients. He also accepts Direct Access instructions from lay clients where appropriate under Bar Standards Board rules. Contact Burnell Chambers\' clerks to discuss your matter.',
  },
  {
    q: 'How do I contact Burnell Chambers?',
    a: 'Burnell Chambers can be reached by telephone on 020 3576 1203 or by email at clerks@burnellchambers.co.uk. Chambers is located at 1A Middle Temple Lane, London EC4Y 9AA. Daniel\'s direct line is 0161 826 9496.',
  },
  {
    q: 'Can Daniel advise on leaving the UK for tax purposes?',
    a: 'Yes. Daniel has extensive experience advising UK-domiciled individuals on departing the UK tax net — including statutory residence test analysis, treaty claims, the extended deemed domicile rules under Finance Act 2025, and selecting suitable jurisdictions for relocation.',
  },
  {
    q: 'Does Daniel Feingold advise on HMRC investigations?',
    a: 'Yes. Daniel represents clients in all types of HMRC enquiries and investigations, including Code of Practice 9 serious fraud cases, tax residency disputes, offshore disclosure, and appeals before the First-tier and Upper Tax Tribunals.',
  },
  {
    q: 'What is Daniel Feingold\'s professional background?',
    a: 'Daniel Feingold is a barrister with a business degree. He founded Stratax LLP (formerly Strategic Tax Planning) and served as its Senior Partner before joining Burnell Chambers. He previously held senior roles at BDO Stoy Hayward, Dechert LLP, and Grant Thornton. He is a contributor to the Tax Journal and Mondaq, and has appeared on BBC Radio 4.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-cream" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <span className="section-label">Common Questions</span>
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>

        <div className="mt-8 divide-y divide-black/8 border-y border-black/8">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-5 flex justify-between items-start gap-4 group"
                aria-expanded={open === i}
              >
                <span className="font-serif text-[1rem] text-navy leading-snug group-hover:text-gold transition-colors">
                  {item.q}
                </span>
                <span
                  className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-navy/30 flex items-center justify-center transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
                >
                  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-navy" fill="currentColor">
                    <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="pb-5 pr-9">
                  <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
