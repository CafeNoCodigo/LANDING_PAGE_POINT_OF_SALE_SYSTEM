import React from 'react'

const Resources = () => {
  return (
    <section id='resources'> 
        <div className='section mt-10'>
            <h1 className='h1 text-center md:text-5xl text-2xl'>Principais Recusrsos</h1>
            <div className='flex items-center justify-center mt-20 gap-5'>
                <div className='resource-img'>
                    <img className="resource-element w-[8rem]" src="/images/logos/simple.png" alt="Simple" />
                    <p className='resources-p'>Interface simples e intuitiva,
                        desenvolvida para que qualquer
                        pessoa possa operar o sistema com
                        rapidez, sem necessidade de
                        treinamento técnico.
                    </p>
                </div>
                <div className='resource-img'>
                    <img className="resource-element w-[8rem]" src="/images/logos/manager.png" alt="Manager"/>
                    <p className='resources-p ml-10 mr-10'>Gerencie produtos com códigos
                        de barras, quantidades, preços e
                        imagens. Receba alertas de
                        estoque baixo.
                    </p>
                </div>
                <div className='resource-img'>
                    <img className="resource-element w-[8rem]" src="/images/logos/develop.png" alt="" />
                    <p className='resources-p'> Acompanhe o desempenho do seu
                        negócio com relatórios completos
                        de vendas, produtos mais vendidos,
                        formas de pagamento.
                    </p>
                </div>
            </div>
        </div>
            
    </section> 
  )
}

export default Resources