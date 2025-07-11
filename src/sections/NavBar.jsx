const NavBar = () => {
  return (
    <div className='nav-bar bg-[rgba(0, 0, 0, 0.5)]'>
        <div className='logo flex flex-row items-center justify-between px-10 gap-2'>
            <a href="#hero"><img src="./vende-agora.png" alt="" /></a>
            <a href="#hero" className="hidden md:block">Vende Agora</a>
        </div>
        <div className='md:px-10'>
            <div className='flex gap-4'>
                <a className="nav-bar-a underline-animated lg:block" href="#hero"><span className="text-[var(--element-decoration)]">◉</span> Inicio</a>
                <a className="md:mr-5 md:ml-5 nav-bar-a underline-animated sm:block md:block" href="#resources"><span className="text-[var(--element-decoration)]">◉</span> Recursos</a>
                <a className="nav-bar-a underline-animated lg:block" href="#report"><span className="text-[var(--element-decoration)]">◉</span> Depoimentos</a>
                <a className="nav-bar-a underline-animated lg:block" href="#report"><span className="text-[var(--element-decoration)]">◉</span> Planos</a>
            </div>
        </div>
        <div className="flex gap-4 items-center justify-center ">
            <a href="#contact" className='btn nav-bar-btn glow-hover rounded-lg'>Contacto</a>
        </div>
    </div>
  )
}

export default NavBar