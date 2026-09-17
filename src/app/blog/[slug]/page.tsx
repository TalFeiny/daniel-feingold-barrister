import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://danielfeingold.co.uk'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: 'Tax Barrister',
      worksFor: { '@type': 'Organization', name: 'Burnell Chambers' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Burnell Chambers',
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  }

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <nav className="bg-cream border-b border-black/5" aria-label="Breadcrumb">
          <div className="max-w-6xl mx-auto px-6 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-400">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Insights
                </Link>
              </li>
              <li>/</li>
              <li className="text-navy font-medium truncate max-w-[200px]">
                {post.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <section className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-gold border border-gold text-[0.68rem] tracking-[0.18em] uppercase px-3 py-1 rounded-sm">
                {post.category}
              </span>
              <span className="text-white/40 text-xs tracking-wider uppercase">
                {post.locationName}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-[2.6rem] leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-gold" />
              <span>{formatDate(post.date)}</span>
              <span className="w-1 h-1 rounded-full bg-gold" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-transparent mt-14" />
        </section>

        {/* Article Body */}
        <article className="bg-white py-14">
          <div className="max-w-3xl mx-auto px-6">
            {post.sections.map((section, i) => (
              <div key={i} className="mb-10 last:mb-0">
                <h2 className="font-serif text-2xl text-navy mb-4 leading-snug">
                  {section.heading}
                </h2>
                <div
                  className="text-gray-600 leading-relaxed space-y-4 text-[0.95rem]"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                {i < post.sections.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-gold/30 to-transparent mt-10" />
                )}
              </div>
            ))}
          </div>
        </article>

        {/* Author & CTA */}
        <section className="bg-cream py-12 border-t border-black/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white border border-black/7 rounded-sm p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-full flex-shrink-0 bg-gradient-to-br from-gold to-navy border-2 border-gold flex items-center justify-center">
                <span className="font-serif text-xl text-white">DF</span>
              </div>
              <div>
                <h3 className="font-serif text-lg text-navy mb-1">Daniel Feingold</h3>
                <p className="text-gold text-xs tracking-wider uppercase mb-3">
                  Tax Barrister · Burnell Chambers
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Daniel Feingold is a specialist tax barrister with over 30 years&rsquo;
                  experience, practising from Burnell Chambers, Middle Temple, London.
                  He advises solicitors, accountants, private wealth managers, and trust
                  service providers on complex UK and international tax matters.
                </p>
                <Link
                  href="/#contact"
                  className="text-gold text-xs tracking-wide uppercase font-medium hover:text-gold-light transition-colors"
                >
                  Contact Burnell Chambers &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {otherPosts.length > 0 && (
          <section className="bg-white py-14 border-t border-black/5">
            <div className="max-w-6xl mx-auto px-6">
              <span className="section-label">More Insights</span>
              <h2 className="section-title mb-8">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="border border-black/7 border-t-[3px] border-t-gold rounded-sm p-7 card-hover block no-underline group"
                  >
                    <span className="text-xs text-gold uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="font-serif text-base text-navy mt-2 mb-2 group-hover:text-gold transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {formatDate(p.date)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
