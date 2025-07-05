import { useState } from "react"
import { about } from '../index'

const About = () => {
    const [hoveredIndex, setHoveredIndex] = useState( null );

  return (
    <section id="about">
        <div className='section section-layout'>
            <div className='text-center'>
                <h1 className='h1 md:text-5xl text-2xl pb-10 mt-10 md:mt-10 tracking-tighter text-shadow'>Sobre o Vende Agora</h1>
                    <div className="md:flex text-center items-center justify-center mx-5 
                                gap-10">
                        {about.map((resource, index) => (
                            <div 
                                className={`
                                    md:transform transition-all duration-500 ease-in-out
                                    cursor-pointer
                                    mb-15
                                    md:px-5 
                                    pt-5 pb-5
                                    md:rounded-4xl rounded-xl
                                    ${hoveredIndex !== null && hoveredIndex !== index ? "md:scale-95 md:opacity-40 md:bg-transparent bg-[var(--element-decoration)]" : "md:scale-100 md:opacity-100 bg-[var(--element-decoration)]"}`}
                                    key={index}
                                    onMouseEnter = {() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}>
                                <p className="p text-shadow about-p">
                                    {resource.text} 
                                </p>
                            </div>
                        ))}
                    </div>
                    
                <button className='btn p-5 pl-10 pr-10 glow-hover text-2xl'>Baixar Demo</button>
            </div>
        </div>
    </section>
    
  )
}
export default About