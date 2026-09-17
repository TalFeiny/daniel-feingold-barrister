const credentials = [
  { title: 'Called to the Bar', detail: 'Barrister, England & Wales · Business Degree' },
  { title: 'Burnell Chambers', detail: '1A Middle Temple Lane, London EC4Y 9AA' },
  { title: 'Former Senior Partner', detail: 'Stratax LLP (formerly Strategic Tax Planning)' },
  { title: 'Previous Firms', detail: 'BDO Stoy Hayward · Dechert LLP · Grant Thornton' },
  { title: 'Publications', detail: 'Tax Journal contributor · Mondaq author' },
  { title: 'Media', detail: 'BBC Radio 4 · Tax commentary & professional seminars' },
]

const stats = [
  { num: '30+', label: 'Years at the Tax Bar' },
  { num: 'UK & Int\'l', label: 'Cross-border practice' },
  { num: 'HNW', label: 'Private client focus' },
  { num: 'BBC R4', label: 'Media commentary' },
]

export default function Profile() {
  return (
    <section id="profile" className="py-20" aria-labelledby="profile-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: bio */}
          <div>
            <span className="section-label">Biography</span>
            <h2 id="profile-heading" className="section-title">About Daniel Feingold</h2>

            <div className="space-y-4 text-[0.95rem] text-gray-600 leading-relaxed">
              <p>
                Daniel Feingold is a barrister and specialist in tax law with over 30 years'
                experience at the highest levels of the profession. Called to the Bar, he holds
                a business degree and has built an exceptional career spanning the UK's leading
                international accountancy and law firms.
              </p>
              <p>
                Before joining Burnell Chambers, Daniel was Senior Partner of Stratax LLP, a
                niche tax law firm he founded (initially as Strategic Tax Planning), following
                senior roles at BDO Stoy Hayward, Dechert LLP, and Grant Thornton. He has
                developed particular expertise in residence and domicile planning, international
                tax structuring, and complex HMRC disputes.
              </p>
              <p>
                His pragmatic, commercially minded approach — focused on delivering tangible
                outcomes rather than theoretical positions — has made him a trusted adviser
                to solicitors, accountants, corporate clients, private equity and venture capital
                firms, wealth managers, and high-net-worth individuals.
              </p>
              <p>
                Daniel has appeared on BBC Radio 4, contributed extensively to <em>Mondaq</em>,
                and delivered seminars across the profession on leading tax issues of the day.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-navy text-white p-5 rounded-sm text-center">
                  <span className="font-serif text-[2rem] text-gold leading-none block">{s.num}</span>
                  <span className="text-[0.68rem] tracking-wider uppercase text-white/60 mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: credentials + quote */}
          <div>
            <ul className="divide-y divide-black/6">
              {credentials.map((c) => (
                <li key={c.title} className="flex gap-4 items-start py-4">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <div>
                    <strong className="block text-[0.9rem] text-navy font-semibold mb-0.5">
                      {c.title}
                    </strong>
                    <span className="text-sm text-gray-500">{c.detail}</span>
                  </div>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-[3px] border-gold pl-5 py-2 bg-cream rounded-r-sm">
              <p className="font-serif text-[1.1rem] italic text-navy leading-relaxed">
                "Getting out of the UK tax net and selecting the right favourable tax
                jurisdiction is actually quite challenging — the detail matters enormously."
              </p>
              <cite className="text-[0.75rem] text-gray-400 not-italic mt-2 block tracking-wide">
                — Daniel Feingold, Tax Journal
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
