import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://danielfeingold.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Daniel Feingold – Tax Barrister | Burnell Chambers, London',
    template: '%s | Daniel Feingold Tax Barrister',
  },
  description:
    "Daniel Feingold is a specialist Tax Barrister at Burnell Chambers, Middle Temple, London, with over 30 years experience in UK and international tax law, HMRC disputes, residence & domicile planning, and complex tax structuring.",
  keywords: [
    'tax barrister London',
    'Daniel Feingold',
    'Burnell Chambers',
    'tax barrister UK',
    'HMRC disputes barrister',
    'residence domicile planning',
    'non-domicile tax advice',
    'international tax barrister',
    'capital gains tax barrister',
    'inheritance tax planning barrister',
    'corporate tax barrister',
    'transfer pricing advice',
    'employee share schemes barrister',
    'EOT barrister',
    'IR35 advice',
    'offshore structuring barrister',
    'Middle Temple tax barrister',
    'tax law expert London',
    'tax barrister for solicitors',
    'tax barrister for accountants',
    'private wealth tax counsel',
    'trust services tax advice',
    'cross-border tax planning',
    'offshore tax compliance',
  ],
  authors: [{ name: 'Daniel Feingold', url: SITE_URL }],
  creator: 'Daniel Feingold',
  publisher: 'Burnell Chambers',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'Daniel Feingold – Tax Barrister',
    title: 'Daniel Feingold – Tax Barrister | Burnell Chambers, London',
    description:
      "Specialist Tax Barrister at Burnell Chambers with 30+ years experience. Expert in UK and international tax law, HMRC disputes, residence and domicile, and complex tax planning.",
    firstName: 'Daniel',
    lastName: 'Feingold',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Feingold – Tax Barrister | Burnell Chambers',
    description:
      "Specialist Tax Barrister at Burnell Chambers, London. 30+ years experience in complex UK and international tax law.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: 'Legal Services',
}

// Structured data: Person + LegalService + FAQPage (GEO & SEO)
const jsonLdSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Daniel Feingold',
    jobTitle: 'Tax Barrister',
    description:
      "Daniel Feingold is a specialist Tax Barrister at Burnell Chambers, Middle Temple, London, with over 30 years experience in UK and international tax law.",
    url: SITE_URL,
    email: 'clerks@burnellchambers.co.uk',
    telephone: '+442035761203',
    knowsAbout: [
      'UK Tax Law',
      'International Tax Planning',
      'Tax Residence and Domicile',
      'HMRC Disputes and Investigations',
      'Capital Gains Tax',
      'Inheritance Tax Planning',
      'Corporate Tax Restructuring',
      'Management Buy-Outs',
      'Employee Share Incentives',
      'Employee Ownership Trusts',
      'Transfer Pricing',
      'Offshore Structuring',
      'Non-Domicile Taxation',
      'IR35',
      'Double Taxation Treaties',
    ],
    alumniOf: [
      { '@type': 'Organization', name: 'BDO Stoy Hayward' },
      { '@type': 'Organization', name: 'Dechert LLP' },
      { '@type': 'Organization', name: 'Grant Thornton' },
      { '@type': 'Organization', name: 'Stratax LLP' },
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Burnell Chambers',
      url: 'https://burnellchambers.co.uk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1A Middle Temple Lane',
        addressLocality: 'London',
        postalCode: 'EC4Y 9AA',
        addressCountry: 'GB',
      },
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Burnell Chambers',
    },
    sameAs: [
      'https://uk.linkedin.com/in/dfeingold',
      'https://www.taxjournal.com/authors/daniel-feingold',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Daniel Feingold – Tax Barrister',
    description:
      'Specialist tax barrister services covering UK and international tax law, HMRC disputes, residence and domicile planning, corporate restructuring, and estate planning.',
    url: SITE_URL,
    provider: { '@id': `${SITE_URL}/#person` },
    areaServed: ['United Kingdom', 'International'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tax Barrister Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Residence & Domicile Planning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HMRC Disputes & Investigations' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Restructuring & MBO Tax Advice' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Tax Structuring' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Capital Gains Tax Planning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inheritance Tax Planning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Employee Share Incentives & EOTs' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Offshore Structuring' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transfer Pricing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IR35 Contractor Tax Advice' } },
      ],
    },
    telephone: '+442035761203',
    email: 'clerks@burnellchambers.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1A Middle Temple Lane',
      addressLocality: 'London',
      postalCode: 'EC4Y 9AA',
      addressCountry: 'GB',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Daniel Feingold specialise in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Daniel Feingold is a specialist Tax Barrister at Burnell Chambers, London, with over 30 years experience in UK and international tax law. His core areas include tax residence and domicile planning for non-domiciliaries, HMRC disputes and investigations, corporate tax structuring (MBOs, reconstructions, M&A), offshore structuring, capital gains tax, inheritance tax planning, employee share incentives, and IR35.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I instruct Daniel Feingold as a barrister?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Daniel Feingold accepts instructions from solicitors, accountants, and other regulated professionals, as well as directly from lay clients under the Bar Direct Access rules where appropriate. Contact Burnell Chambers clerks on 020 3576 1203 or at clerks@burnellchambers.co.uk to discuss your matter and check availability.",
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Daniel Feingold based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Daniel Feingold practises from Burnell Chambers, 1A Middle Temple Lane, London EC4Y 9AA. Conferences can be held in person at Middle Temple or by video call.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Daniel Feingold advise on leaving the UK for tax purposes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Daniel has extensive experience advising UK-domiciled and UK-resident individuals on departing the UK tax net, including statutory residence test analysis, treaty claims, the extended deemed domicile rules introduced by Finance Act 2025, and selecting appropriate low-tax jurisdictions for relocation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Daniel Feingold\'s background before joining Burnell Chambers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Daniel Feingold is a barrister with a business degree. Before joining Burnell Chambers he was Senior Partner of Stratax LLP (formerly Strategic Tax Planning), a niche tax law firm he founded. He previously held senior roles at BDO Stoy Hayward, Dechert LLP, and Grant Thornton. He has appeared on BBC Radio 4 and is a regular contributor to the Tax Journal and Mondaq.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Daniel Feingold advise on HMRC investigations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Daniel Feingold represents clients in all types of HMRC enquiries and investigations, including Code of Practice 9 (serious fraud), tax residency disputes, offshore disclosure, and appeals before the Tax Tribunals.',
        },
      },
    ],
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {jsonLdSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}
