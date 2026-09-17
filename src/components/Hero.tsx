export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(184,148,63,0.12) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_320px] gap-14 items-center">

          {/* Left: copy */}
          <div>
            <span className="inline-block text-gold border border-gold text-[0.68rem] tracking-[0.18em] uppercase px-3 py-1.5 rounded-sm mb-6">
              Tax Barrister · 30+ Years' Experience
            </span>
            <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.1] mb-5">
              Expert Counsel in<br />
              <em className="not-italic text-gold-light">Complex UK &amp; International</em><br />
              Tax Law
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Daniel Feingold is one of the UK's most experienced specialist tax barristers,
              advising solicitors, accountants, corporates, and high-net-worth individuals
              on the full spectrum of UK and international tax matters from Burnell Chambers,
              Middle Temple.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Instruct Daniel</a>
              <a href="#expertise" className="btn-outline-white">Areas of Practice</a>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-6 text-[0.75rem] text-white/50 uppercase tracking-wider">
              {['Burnell Chambers, Middle Temple', 'BSB Regulated', 'Direct Access Available'].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block flex-shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: contact card */}
          <div className="bg-white/5 border border-gold/25 rounded-sm p-7 backdrop-blur-sm">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-content-center bg-gradient-to-br from-gold to-navy border-2 border-gold flex items-center justify-center">
              <span className="font-serif text-3xl text-white font-normal">DF</span>
            </div>

            <div className="text-center mb-5">
              <div className="font-serif text-xl text-white mb-1">Daniel Feingold</div>
              <div className="text-gold text-[0.7rem] tracking-[0.12em] uppercase">Barrister · Tax Law</div>
            </div>

            <hr className="border-gold/20 mb-5" />

            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-gold text-[0.65rem] uppercase tracking-wider mb-0.5">Chambers</dt>
                <dd className="text-white/75 leading-relaxed">
                  Burnell Chambers<br />
                  1A Middle Temple Lane<br />
                  London EC4Y 9AA
                </dd>
              </div>
              <hr className="border-gold/10" />
              <div>
                <dt className="text-gold text-[0.65rem] uppercase tracking-wider mb-0.5">Clerks</dt>
                <dd className="text-white/75">
                  <a href="tel:+442035761203" className="hover:text-gold-light transition-colors block">020 3576 1203</a>
                  <a href="mailto:clerks@burnellchambers.co.uk" className="hover:text-gold-light transition-colors block text-[0.8rem]">
                    clerks@burnellchambers.co.uk
                  </a>
                </dd>
              </div>
              <hr className="border-gold/10" />
              <div>
                <dt className="text-gold text-[0.65rem] uppercase tracking-wider mb-0.5">Direct</dt>
                <dd className="text-white/75">
                  <a href="tel:+441618269496" className="hover:text-gold-light transition-colors">0161 826 9496</a>
                </dd>
              </div>
            </dl>

            <a
              href="#contact"
              className="mt-5 block text-center bg-gold hover:bg-gold-light text-white text-[0.75rem] tracking-wide uppercase py-2.5 rounded-sm transition-colors font-medium"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Gold base rule */}
      <div className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-transparent" />
    </section>
  )
}
