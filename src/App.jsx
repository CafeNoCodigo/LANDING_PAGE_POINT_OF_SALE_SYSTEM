import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import About from './sections/About'
import Resources from './sections/Resources'
import Resources_Payment from './sections/Resources_Payment'
import Report from './sections/Report'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Plans from './sections/Plans'

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
    <div className='h-80 px-15 py-15'>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <h1 className='h1 text-center'>Pronto Para dinamizar o registro de vendas do seu negócio?</h1>
        <a className='btn rounded-lg px-2 py-5 w-1/2 md:w-1/4 text-xl font-semibold text-center glow-hover'>Criar Conta Grátis</a>
      </div>
    </div>
    <Footer /> 
    </>
  )
    
}

export default App