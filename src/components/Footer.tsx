import Image from 'next/image'

const practiceLinks = [
  'Residence & Domicile',
  'HMRC Disputes',
  'Corporate Restructuring',
  'Offshore Structuring',
  'Capital Gains Tax',
  'Inheritance Tax',
  'Employee Incentives',
  'IR35 & Contractor Tax',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white/50">
      {/* Chambers strip */}
      <div className="bg-cream border-t border-b border-black/7">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-[0.68rem] uppercase tracking-widest text-gold mb-1">Member of</p>
              <p className="font-serif text-navy text-xl">Burnell Chambers</p>
              <p className="text-sm text-gray-500 mt-0.5">1A Middle Temple Lane · London EC4Y 9AA · Also: Dublin</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Tax Law', 'Commercial & Chancery', 'International & Offshore', 'HMRC Investigations', 'ADR', 'Regulatory', 'Defamation & Privacy', 'IP'].map((a) => (
                <span key={a} className="bg-navy/8 text-navy text-[0.72rem] px-3 py-1 rounded-full">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="/" className="block mb-4 no-underline">
              <span className="font-serif text-[1.3rem] text-white block leading-none">Daniel Feingold</span>
              <span className="text-gold text-[0.65rem] tracking-[0.15em] uppercase mt-0.5 block">Tax Barrister · Burnell Chambers</span>
            </a>
            <p className="text-[0.83rem] leading-relaxed mb-1">
              Specialist tax barrister with over 30 years&rsquo; experience in complex UK
              and international tax law, practising from Burnell Chambers, Middle Temple, London.
            </p>
            <p className="text-[0.83rem]">Regulated by the Bar Standards Board.</p>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-[0.68rem] uppercase tracking-widest text-gold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              {practiceLinks.map((l) => (
                <li key={l}>
                  <a href="/#expertise" className="text-[0.83rem] text-white/50 hover:text-gold-light transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.68rem] uppercase tracking-widest text-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-[0.83rem]">
              <li>
                <a href="tel:+442035761203" className="text-white/50 hover:text-gold-light transition-colors">
                  020 3576 1203
                </a>
              </li>
              <li>
                <a href="tel:+441618269496" className="text-white/50 hover:text-gold-light transition-colors">
                  0161 826 9496
                </a>
              </li>
              <li>
                <a href="mailto:clerks@burnellchambers.co.uk" className="text-white/50 hover:text-gold-light transition-colors">
                  clerks@burnellchambers.co.uk
                </a>
              </li>
              <li>
                <a href="https://burnellchambers.co.uk" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold-light transition-colors">
                  burnellchambers.co.uk
                </a>
              </li>
            </ul>
            <h4 className="text-[0.68rem] uppercase tracking-widest text-gold mb-3 mt-6">Resources</h4>
            <ul className="space-y-2 text-[0.83rem]">
              <li>
                <a href="/blog" className="text-white/50 hover:text-gold-light transition-colors">
                  Tax Insights &amp; Articles
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-[0.73rem] text-white/25 leading-relaxed border-t border-white/8 pt-6 mb-4">
          Daniel Feingold is a barrister regulated by the Bar Standards Board. This website is provided for
          informational purposes only and does not constitute legal advice. Nothing on this website creates
          a barrister&ndash;client relationship. Burnell Chambers is not a law firm.
        </p>

        <div className="flex flex-wrap justify-between items-center gap-4 text-[0.73rem] text-white/30">
          <div className="flex flex-wrap gap-3">
            <span>&copy; {year} Burnell Chambers. All rights reserved.</span>
            <span className="opacity-50">|</span>
            <span>&copy; {year} Daniel Feingold</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/bar-standards-board.png"
              alt="Bar Standards Board – Regulating Barristers"
              width={120}
              height={63}
              className="h-10 w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
