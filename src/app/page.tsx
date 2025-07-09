import Header from './(main)/components/Header'
import Hero from './(main)/components/Hero'
import About from './(main)/components/About'
import Experience from './(main)/components/Experience'
import Skills from './(main)/components/Skills'
import Certifications from './(main)/components/Certifications'
import Contact from './(main)/components/Contact'
import Footer from './(main)/components/Footer'
import Education from './(main)/components/Education'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Certifications />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}