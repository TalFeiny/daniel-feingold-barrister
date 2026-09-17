const areas = [
  {
    title: 'Residence & Domicile',
    desc: 'Tax planning for non-domiciliaries, expatriates, and internationally mobile individuals. Advice on UK departure, remittance basis, and the Finance Act 2025 extended deemed domicile rules.',
  },
  {
    title: 'HMRC Disputes & Investigations',
    desc: 'Representing clients in tax investigations, enquiries, and disputes with HMRC, including Code of Practice 9, offshore disclosure, and Tax Tribunal appeals.',
  },
  {
    title: 'Corporate Restructuring & MBOs',
    desc: 'Tax advice on mergers, acquisitions, demergers, management buy-outs, company reconstructions, and pre-sale planning to maximise tax efficiency.',
  },
  {
    title: 'Transfer Pricing & IP',
    desc: 'International transfer pricing structuring, intellectual property rights management, and cross-border royalty arrangements for multinational groups.',
  },
  {
    title: 'Employee Incentives & EOTs',
    desc: 'Design and implementation of EMI, CSOP, SIP, unapproved share options, Employee Ownership Trusts, and Employee Benefit Trust structures.',
  },
  {
    title: 'Offshore Structuring',
    desc: 'Offshore trusts, foundations, and international holding structures. Advice on offshore disclosure obligations and double taxation treaty planning.',
  },
  {
    title: 'Capital Gains Tax',
    desc: 'CGT planning on disposals of businesses, shares, and property. Business asset disposal relief, holdover relief, rollover, and offshore gains.',
  },
  {
    title: 'Inheritance Tax Planning',
    desc: 'IHT mitigation including BPR, APR, trust planning, and advice for those leaving the UK under the extended deemed domicile rules.',
  },
  {
    title: 'IR35 & Contractor Tax',
    desc: 'Advice on off-payroll working rules, IR35 status determinations, and structuring for contractors and their intermediary companies.',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="bg-cream py-20" aria-labelledby="expertise-heading">
      <div className="max-w-6xl mx-auto px-6">
        <span className="section-label">Areas of Practice</span>
        <h2 id="expertise-heading" className="section-title">Specialist Tax Expertise</h2>
        <p className="section-intro">
          Daniel advises on the full range of complex UK and international tax matters,
          instructed by leading law firms, accountancy practices, and directly by clients
          across corporate, private client, and contentious work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {areas.map((a, i) => (
            <article
              key={a.title}
              className="bg-white border border-black/7 border-t-[3px] border-t-gold p-7 rounded-sm card-hover"
            >
              <div className="w-9 h-9 bg-navy rounded-sm flex items-center justify-center mb-4 flex-shrink-0">
                <span className="font-serif text-gold text-sm leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-serif text-[1.1rem] text-navy mb-2 font-medium">{a.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
