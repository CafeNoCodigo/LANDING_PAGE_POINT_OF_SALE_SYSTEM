import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import About from './sections/About'
import Resources from './sections/Resources'
import Resources_Payment from './sections/Resources_Payment'
import Report from './sections/Report'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Plans from './sections/Plans'
import SectionCTA from './sections/SectionCTA'

const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Resources />
    <Resources_Payment />
    <Plans />
    <Report />
    <Contact />
    <SectionCTA />
    <Footer /> 
    </>
  )
}

export default App