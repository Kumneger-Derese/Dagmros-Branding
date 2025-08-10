import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import { useTheme } from './context/ThemeContext.jsx'
import Companies from './components/Companies.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Faq from './components/Faq.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Blogs from './components/Blogs.jsx'

const App = () => {
  const { isDark } = useTheme()

  return (
    <div
      className={`${
        isDark && 'dark'
      } bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-500`}
    >
      <div className={'px-8'}>
        <Navbar />
        <Hero />
        <Companies />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Blogs />
        <Faq />
        <CTA />
      </div>

      <Footer />
    </div>
  )
}

export default App
