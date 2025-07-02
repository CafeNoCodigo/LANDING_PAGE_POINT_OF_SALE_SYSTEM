import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className='section hero-section'>
        <div className='section-layout md:gap-5'>
            <div>
              <div className='section-txt'>
                <h1 className='h1 hero-h1'>Controle Seu negócio como nunca antes fez</h1>
                <p className='p hero-p '>Pare de anotar suas vendas em cadernos, blocos de notas ou estensas planilhas que complicam o seu negócio</p>
              </div>
            </div>
            <div className='hero-img'>
              <img className="md:ml-6 md:mt-7 scale-120" src="/images/hero-img-removebg-preview.png" alt="Tela Inicial da App" />
            </div>
        </div>     
    </section>
  )
}

export default Hero