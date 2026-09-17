import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Profile from '@/components/Profile'
import NotableWork from '@/components/NotableWork'
import Publications from '@/components/Publications'
import FAQ from '@/components/FAQ'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Profile />
        <NotableWork />
        <Publications />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
