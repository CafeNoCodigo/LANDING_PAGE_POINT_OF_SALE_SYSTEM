import { section } from "framer-motion/client"

const About = () => {
  return (
    <section id="about">
        <div className='section section-layout'>
            <div className='text-center'>
                <h1 className='h1 md:text-5xl text-2xl pb-10 mt-10 md:mt-10 tracking-tighter text-shadow'>Sobre o Vende Agora</h1>
                <div className="about">
                    <p className="p text-left text-shadow md:text-4xl text-2xl">
                        Nosso Sistema PDV (Ponto de Venda) foi desenvolvido
                        para simplificar e agilizar a gestão de vendas no seu
                        negócio. Ideal para lojas, mercados, farmácias e pequenos
                        comércios, ele oferece uma interface intuitiva, moderna e
                        de fácil utilização, mesmo para usuários sem experiência
                        técnica.
                    </p>
                </div>
                <button className='btn p-5 pl-10 pr-10 mt-10'>Baixar Demo</button>
            </div>
        </div>
    </section>
    
  )
}
export default About