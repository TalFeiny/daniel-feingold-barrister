const cases = [
  {
    ref: 'UKUT 280 (TCC) · 2024',
    title: 'Kevin McCabe v HMRC',
    desc: 'Tax residence dispute in which the Upper Tribunal held that the taxpayer retained UK residence despite claiming Belgian residency — his "centre of vital interests remained in the UK." Daniel has provided expert commentary on the implications for internationally mobile individuals.',
    tag: 'Tax Residence',
  },
  {
    ref: 'Finance Act 2025 · Section 44(3)',
    title: 'Extended Deemed Domicile Period',
    desc: 'Daniel has critiqued the extension of the deemed domicile period from three to ten years for those leaving the UK as "extremely punitive and in practice unenforceable," advising clients on optimal exit planning under the new regime.',
    tag: 'Domicile · Policy',
  },
  {
    ref: 'UK Departure Planning',
    title: 'Jurisdictional Tax Planning',
    desc: 'Advising UK-born and domiciled clients seeking to leave the UK tax net following IHT regime changes — selecting favourable jurisdictions while navigating statutory residence tests, treaty provisions, and anti-avoidance rules.',
    tag: 'International Planning',
  },
  {
    ref: 'Tax Journal · Regular Contributor',
    title: 'Non-Domicile Taxation Commentary',
    desc: 'Regularly published and cited on non-dom reform, remittance basis planning, and the implications of UK tax policy changes for high-net-worth internationally mobile clients and their advisers.',
    tag: 'Non-Dom · Publications',
  },
  {
    ref: 'Corporate Advisory',
    title: 'Corporate Tax Structuring',
    desc: 'Extensive experience advising on tax aspects of company reconstructions, MBOs, Employee Ownership Trusts, and bespoke share incentive arrangements for PE-backed and owner-managed businesses.',
    tag: 'Corporate · M&A',
  },
  {
    ref: 'HMRC Enquiries',
    title: 'Tax Dispute Resolution',
    desc: 'Acting for clients in high-value HMRC investigations and appeals, including residence disputes, offshore disclosure matters, and challenges to HMRC\'s application of anti-avoidance legislation.',
    tag: 'Litigation · HMRC',
  },
]

export default function NotableWork() {
  return (
    <section
      id="notable"
      className="bg-navy py-20 text-white"
      aria-labelledby="notable-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label">Notable Work</span>
        <h2 id="notable-heading" className="font-serif text-3xl md:text-4xl text-white leading-tight mb-4">
          Cases &amp; Commentary
        </h2>
        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          Daniel's practice spans landmark residence disputes, complex offshore structures,
          and leading published commentary on UK tax reform.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <article
              key={c.title}
              className="bg-white/5 border border-gold/20 rounded-sm p-6 hover:bg-white/8 hover:border-gold/50 transition-all duration-200"
            >
              <div className="text-gold text-[0.67rem] tracking-widest uppercase mb-2">{c.ref}</div>
              <h3 className="font-serif text-[1.05rem] text-white mb-2 font-medium leading-snug">{c.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{c.desc}</p>
              <span className="inline-block mt-4 text-[0.68rem] px-2.5 py-0.5 bg-gold/10 border border-gold/25 text-gold-light rounded-sm">
                {c.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
