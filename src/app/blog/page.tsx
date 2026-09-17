import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogPosts } from '@/data/blog-posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://danielfeingold.co.uk'

export const metadata: Metadata = {
  title: 'Tax Insights & Articles | Daniel Feingold Tax Barrister',
  description:
    'Expert tax insights from Daniel Feingold, specialist Tax Barrister at Burnell Chambers. Articles on UK and international tax planning, HMRC disputes, offshore structuring, and cross-border tax issues.',
  keywords: [
    'tax barrister insights',
    'UK tax planning articles',
    'international tax blog',
    'HMRC disputes guidance',
    'offshore tax structuring articles',
    'tax barrister London blog',
    'non-dom tax advice articles',
    'cross-border tax planning',
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Tax Insights & Articles | Daniel Feingold Tax Barrister',
    description:
      'Expert tax insights and articles from specialist Tax Barrister Daniel Feingold at Burnell Chambers, London.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
}

const sorted = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const featured = sorted[0]
  const rest = sorted.slice(1)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <span className="inline-block text-gold border border-gold text-[0.68rem] tracking-[0.18em] uppercase px-3 py-1.5 rounded-sm mb-5">
              Insights &amp; Commentary
            </span>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight mb-5">
              Tax <em className="not-italic text-gold-light">Insights</em>
            </h1>
            <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
              Expert analysis and practical guidance on UK and international tax law,
              written for solicitors, accountants, private wealth advisers, and trust
              service providers.
            </p>
          </div>
          <div className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-transparent mt-16" />
        </section>

        {/* Featured article */}
        {featured && (
          <section className="bg-white py-12 border-b border-black/5">
            <div className="max-w-6xl mx-auto px-6">
              <span className="section-label">Latest Article</span>
              <Link
                href={`/blog/${featured.slug}`}
                className="block bg-cream border border-black/7 rounded-sm p-8 md:p-10 card-hover no-underline group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs text-gold uppercase tracking-wider font-medium">
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {formatDate(featured.date)}
                  </span>
                  <span className="text-xs text-gray-400">
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-navy mb-3 group-hover:text-gold transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4 max-w-3xl">
                  {featured.excerpt}
                </p>
                <span className="text-gold text-xs tracking-wide uppercase font-medium">
                  Read Full Article &rarr;
                </span>
              </Link>
            </div>
          </section>
        )}

        {/* All articles */}
        <section className="bg-cream py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white border border-black/7 border-t-[3px] border-t-gold rounded-sm p-7 card-hover block no-underline group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg text-navy mb-2 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-gold text-xs tracking-wide uppercase font-medium">
                      Read &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy text-white py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Need Specialist Tax Counsel?
            </h2>
            <p className="text-white/65 leading-relaxed mb-8">
              Daniel Feingold advises solicitors, accountants, and private wealth
              professionals on complex UK and international tax matters.
              Contact the clerks at Burnell Chambers.
            </p>
            <Link href="/#contact" className="btn-primary">
              Contact Burnell Chambers
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
