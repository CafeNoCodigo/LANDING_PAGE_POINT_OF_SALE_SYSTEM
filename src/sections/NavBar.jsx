import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-bar bg-[rgba(0, 0, 0, 0.459)]'>
        <div className='logo'>
            <a href="#hero">Vende Agora</a>
        </div>
        <div className='md:px-10'>
            <div className='flex gap-4'>
                <a className="nav-bar-a underline-animated lg:block" href="#hero">Inicio</a>
                <a className="md:mr-5 md:ml-5 nav-bar-a underline-animated sm:block md:block" href="#resources">Recursos</a>
                <a className="nav-bar-a underline-animated lg:block" href="#testimonials">Depoimentos</a>
            </div>
        </div>
        <div>
            <a href="#contact" className='btn nav-bar-btn'>Contacto</a>
        </div>
    </div>
  )
}

export default NavBar