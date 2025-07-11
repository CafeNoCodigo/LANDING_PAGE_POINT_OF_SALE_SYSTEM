import { useState } from 'react';
import data from '../index';

const Report = () => {
    const [hoveredIndex, setHoveredIndex] = useState( null );

  return (
    <section id="report" className='section-layout section mt-20 md:mt-0'>

        <img 
        src="/images/bg-element-blue.png"
        className='element-decoration rotate-105 md:ml-250 ml-[-100px] mt-100 md:mt-150
          md:hover:rotate-305 transition-all duration-750 ease-in-out hidden md:block' 
        alt="Element decoration blue" />
        <img 
        src="/images/bg-element-blue.png"
        className='element-decoration rotate-105 ml-[-100px] mt-100 md:mt-0
          md:hover:rotate-305 transition-all duration-750 ease-in-out hidden md:block' 
        alt="Element decoration blue" />
        
        <div>
            <h1 className='h1 mb-10 text-center text-shadow-lg'>{ data.title.report }</h1>
            <div className='md:flex'>
                { data.report.map((resource, index) =>
                    <div key={ index }
                    className={`report-info transition-all duration-500 ease-in-out
                        ${ hoveredIndex !== null && hoveredIndex !== index ? "md:scale-95 md:opacity-40" : "opacity-100 scale-100"}`}
                    onMouseEnter={ () => setHoveredIndex( index )}
                    onMouseLeave={ () => setHoveredIndex( null )}>
                        <p className='p mb-5 font-light'>{ resource.text }</p>
                        <span className='text-black font-bold md:text-2xl text-xl'>{ resource.author }</span>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default Report
