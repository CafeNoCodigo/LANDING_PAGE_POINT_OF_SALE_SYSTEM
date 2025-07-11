import { useState } from "react";
import data from "../index";

const Resources = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="resources" className="section mt-15">
      <div className="">
        <h1 className="h1 text-center md:text-5xl text-2xl">{ data.title.resources }</h1>
        <div className="md:flex flex-row items-center justify-center mt-20 md:gap-5 p-2">
          {data.resourcesData.map((resource, index) => (
            <div
              key={index}
              className={`
                resource-img
                cursor-pointer
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
              <h1 className="h1 md:text-3xl text-2xl mb-5">{resource.title}</h1>
              <p className="resources-p">{resource.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;