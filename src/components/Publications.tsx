const items = [
  {
    source: 'Tax Journal',
    title: '"One Minute With… Daniel Feingold"',
    desc: 'Profile interview on non-dom planning, Finance Act 2025 implications, and the current challenges of advising clients who want to leave the UK tax net.',
    date: 'Tax Journal · 2024–25',
  },
  {
    source: 'BBC Radio 4',
    title: 'Tax Commentary & Analysis',
    desc: 'Invited contributor on BBC Radio 4 covering UK tax policy, international tax planning, and the changing landscape for high-net-worth individuals.',
    date: 'BBC Radio 4 · Various',
  },
  {
    source: 'Mondaq',
    title: 'International Tax Planning Articles',
    desc: 'Regular author covering non-dom reform, offshore structuring, HMRC enforcement trends, double taxation, and international tax planning strategies.',
    date: 'Mondaq · Ongoing',
  },
  {
    source: 'Professional Seminars',
    title: 'CPD & Industry Presentations',
    desc: 'Delivering seminars to law firms, accountancy practices, and wealth management teams on current tax issues, case law, and planning strategies.',
    date: 'Various Venues · Ongoing',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="bg-gray-50 py-20" aria-labelledby="publications-heading">
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label">Publications &amp; Media</span>
        <h2 id="publications-heading" className="section-title">Commentary &amp; Thought Leadership</h2>
        <p className="section-intro">
          Daniel is a recognised voice on UK and international tax policy, contributing
          regularly to the profession's leading journals, media outlets, and CPD programmes.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {items.map((item) => (
            <article
              key={item.title}
              className="bg-white border border-black/7 rounded-sm overflow-hidden card-hover"
            >
              <div className="bg-navy px-5 py-4">
                <span className="text-gold text-[0.68rem] uppercase tracking-widest font-medium">
                  {item.source}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[1.05rem] text-navy mb-2 leading-snug font-medium">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
              <div className="px-6 py-3 border-t border-black/5 text-[0.72rem] text-gray-400">
                {item.date}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
