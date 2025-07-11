import data from '../index'

const Plans = () => {

  return (
    <section className='section' id="plans">
        <img 
        src="/images/bg-element-yellow.png"
        className='element-decoration rotate-55 md:ml-0 ml-[-100px] mt-100 md:mt-130
          md:hover:rotate-255 transition-all duration-750 ease-in-out' 
        alt="Element decoration yellow" />

        <img 
        src="/images/bg-element-blue.png"
        className='element-decoration rotate-105 md:ml-250 ml-[-100px] mt-100 md:mt-150
          md:hover:rotate-305 transition-all duration-750 ease-in-out hidden md:block' 
        alt="Element decoration blue" />

        <img src="/images/bg-element-blue.png" 
        alt="Element decoration blue"
        className='absolute element-decoration rotate-245 md:ml-70 ml-70 mt-30 md:mt-5
          md:hover:rotate-45 transition-all duration-750 ease-in-out' />
      <div className='section-layout flex flex-col mt-10 relative'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='h1'>{data.title.pricing}</h1>
          <h2 className='text-2xl text-amber-100 text-shadow-lg'>Planos Para Todos Negócios</h2>
          <p className='p text-sm text-shadow-sm'>Focado em Mensalidades que cabem no bolso de todos.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
          {data.pricingPlans.map((item) => (
            <div
              key={item.nome}
              className={`
                flex flex-col items-center justify-between
                bg-[var-(--bg-geral)]
                rounded-xl
                shadow-lg
                px-7 py-8
                w-full md:w-1/3
                mb-6 md:mb-0
                transition-all duration-300
                ${item.destaque ? "border-4 border-[var(--element-decoration)] scale-105 z-10 md:-mt-6" : "border border-amber-100"}
              `}
              style={item.destaque ? { boxShadow: "0 8px 32px rgba(251, 191, 36, 0.25)" } : {}}
            >
              <h3 className={`text-2xl font-bold mb-2 ${item.destaque ? "text-[var(--element-decoration)]" : "text-black"}`}>{item.nome}</h3>
              <p className="text-3xl font-extrabold mb-2 p">{item.preco}</p>
              <p className="text-base text-amber-100 mb-4 text-center">{item.descricao}</p>
              <ul className="mb-6 w-full">
                {item.beneficios.map((beneficio, i) => (
                  <li key={i} className="text-sm text-amber-100 mb-2 flex items-center">
                    <span className="mr-2 text-[var(--element-decoration)]">✔</span>
                    {beneficio}
                  </li>
                ))}
              </ul>
              <button
                className={`
                  btn
                  px-6 py-2
                  rounded-lg
                  font-semibold
                  ${item.destaque ? "bg-[var(--element-decoration)] text-amber-100 shadow-md hover:bg-[var(--element-decoration-hover)]" : "bg-black text-amber-100 hover:bg-amber-100 hover:text-black"}
                  transition-all duration-200
                  hover:scale-105
                `}
              >
                {item.botao}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans