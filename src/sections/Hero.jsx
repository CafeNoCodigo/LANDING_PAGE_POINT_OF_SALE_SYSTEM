import { motion } from "framer-motion";

const Hero = () => {
  const handleClick = () => {
    const section = document.getElementById("plans");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className='section hero-section'>
      <img 
        src="/images/bg-element-yellow.png"
        className='element-decoration rotate-55 md:ml-0 ml-[-100px] mt-100 md:mt-120
          md:hover:rotate-255 transition-all duration-750 ease-in-out' 
        alt="Element decoration yellow" />

        <img 
        src="/images/bg-element-blue.png"
        className='element-decoration rotate-105 md:ml-250 ml-[-100px] mt-100 md:mt-150
          md:hover:rotate-305 transition-all duration-750 ease-in-out hidden md:block' 
        alt="Element decoration blue" />

        <img src="/images/bg-element-blue.png" 
        alt="Element decoration blue"
        className='element-decoration rotate-245 md:ml-70 ml-70 mt-30 md:mt-5
          md:hover:rotate-45 transition-all duration-750 ease-in-out' />
        <div className='section-layout md:gap-3 md:pt-25 pt-10 relative'>
              <motion.div
                className='section-txt mt-10'
              >
                <motion.h1 
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.2}}
                  className='h1 hero-h1 text-shadow-lg'> 
                  <span className='span-hero-h1'>Controle Seu</span> negócio como nunca antes fez
                </motion.h1>
                <motion.p 
                  className='p hero-p text-shadow font-light'
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.6}}>
                    Pare de anotar suas vendas em cadernos, blocos de notas ou estensas planilhas que complicam o seu negócio
                </motion.p>
                <motion.button 
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1}}
                  onClick={handleClick}
                  className="btn 
                    tracking-tight
                    mb-15
                    md:pt-5 pt-4 md:pb-5 pb-4 
                    md:px-35 px-15 
                    md:text-3xl text-xl 
                    glow-hover
                    rounded-lg">
                      Começar Gratuitamente
                  </motion.button>
              </motion.div>
            <div className='hero-img group relative'>
              <motion.img
                src="/images/bg.png"
                alt="Efeito de fundo"
                className="absolute 
                  inset-0 
                  w-full h-full 
                  object-cover 
                  z-0 
                  opacity-40 
                  scale-115 
                  pl-30 pb-10 
                  blur-md"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.6 }}
                transition={{ duration: 2, ease: "easeOut", delay: 2.3 }}/>
              <motion.img 
                className="
                  w-4/5 max-w-xs md:max-w-md lg:max-w-lg
                  mx-auto
                  md:ml-6 md:mt-7 
                  relative 
                  z-[1] 
                  scale-120
                " 
                src="/images/hero-img.png" 
                alt="Tela Inicial da App"
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeOut', delay: 1.4 }}/>
            </div>
        </div>     
    </section>
  )
}

export default Hero