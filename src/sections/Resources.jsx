import { useState } from "react";
import resourcesData from "../index";

const Resources = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="resources">
      <div className="section mt-10">
        <h1 className="h1 text-center md:text-5xl text-2xl">Principais Recursos</h1>
        <div className="md:flex items-center justify-center mt-20 gap-5">
          {resourcesData.map((resource, index) => (
            <div
              key={index}
              className={`
                resource-img
                transform transition-all duration-500 ease-in-out
                ${hoveredIndex !== null && hoveredIndex !== index ? "md:opacity-40 md:scale-95" : "md:opacity-100 md:scale-100"}
                md:hover:scale-105
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="resource-img-bg">
                <img className="resource-element" src={resource.img} alt={resource.alt} />
              </div>
              <h1 className="h1">{resource.title}</h1>
              <p className="resources-p">{resource.text}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
