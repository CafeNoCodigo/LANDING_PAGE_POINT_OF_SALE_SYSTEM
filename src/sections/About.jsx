import { useState } from "react"
import data from '../index'

const  About = () => {
    const [hoveredIndex, setHoveredIndex] = useState( null );

  return (
    <section id="about px-5 py-5">

        <img 
        src="/images/bg-element-blue.png"
        className='element-decoration rotate-15 md:ml-250 ml-[-100px] mt-100 md:mt-150
          md:hover:rotate-115 transition-all duration-750 ease-in-out hidden md:block' 
        alt="Element decoration blue" />
        <div className='section section-layout'>
            <div className='text-center'>
                <h1 className='h1 md:pb-20 pb-10 mt-10 md:mt-0 tracking-tighter text-shadow'>{ data.title.about }</h1>
                    <div className="md:flex text-center items-center justify-center gap-5">
                        {data.about.map((resource, index) => (
                            <div 
                                    className={`
                                    md:transform transition-all duration-500 ease-in-out
                                    cursor-pointer
                                    mb-15 
                                    pt-5 pb-5
                                    md:rounded-4xl rounded-xl
                                    ${hoveredIndex !== null && hoveredIndex !== index ? "md:scale-95 md:opacity-40 md:bg-transparent bg-[var(--element-decoration)]" : "md:scale-100 md:opacity-100 bg-[var(--element-decoration)]"}`}
                                    key={index}
                                    onMouseEnter = {() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}>
                                <h2 className="h2 text-shadow about-h2 font-bold">
                                    {resource.title}</h2>
                                <p className="p text-shadow about-p font-light">
                                    {resource.text} 
                                </p>
                            </div>
                        ))}
                    </div>
                <button className='btn p-5 pl-10 pr-10 glow-hover text-2xl rounded-lg'>Baixar Demo</button>
            </div>
        </div>
    </section>
  )
}
export default About