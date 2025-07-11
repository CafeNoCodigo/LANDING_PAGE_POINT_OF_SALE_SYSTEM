import data from '../index';

const Contact = () => {
  return (
    <section id='contact' className='section bg-amber-100'>
      <img 
        src="/images/bg-element-yellow.png"
        className='absolute element-decoration rotate-55 md:ml-0 ml-[-100px] mt-100 md:mt-140
          md:hover:rotate-255 transition-all duration-750 ease-in-out' 
        alt="Element decoration yellow" />

        <img 
        src="/images/bg-element-blue.png"
        className='element-decoration rotate-160 md:ml-250 ml-[230px] mt-0 md:mt-120
          md:hover:rotate-255 transition-all duration-750 ease-in-out' 
        alt="Element decoration blue" />

        <img 
        src="/images/bg-element-blue.png"
        className='element-decoration rotate-105 ml-[-100px] mt-100 md:mt-0
          md:hover:rotate-305 transition-all duration-750 ease-in-out hidden md:block' 
        alt="Element decoration blue" />

      <div className='section-layout mt-15 flex flex-col md:flex-row items-center justify-center gap-10'>
        <div className='md:w-1/2 text-shadow-lg md:ml-10'>
          <h1 className='h1 md:mb-20 mb-10 text-black'>{ data.title.contact }</h1>
          <div className='mb-10'>
            <div className='contact-info'>
              <h1 className='h1 text-xl pr-5 font-light text-black'>Telefone</h1>
              <p className='text-lg'>{ data.contact.tel }</p>
            </div>
            <div className='contact-info '>
              <h1 className='h1 text-xl text-black pr-10 font-light'>E-mail</h1>
              <p className='text-lg'>{ data.contact.email }</p>
            </div>
            <div className='contact-info'>
              <h1 className='h1 text-xl pr-10 font-light text-black'>Social</h1>
              <a href={ data.contact.linkedin } target='_blank'><img src={ data.contact.linkedin_img } alt="Linkedin" /></a>
              <a href={ data.contact.whatsapp } target='_blank'><img className="pr-5 pl-5" src={ data.contact.whatsapp_img } alt="Whatsapp" /></a>
              <a href={ data.contact.x } target='_blank'><img src={ data.contact.x_img } alt="X" /></a>
            </div>
          </div>
        </div>
        <div><img className='md:w-250 md:mt-20 relative' src={ data.contact.img } alt="Contact section" /></div>
      </div>
    </section>
    
  )
}

export default Contact