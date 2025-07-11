import { useState } from "react";
import data from "../index";

const Resources = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="resources" className="section mt-15 px-5 py-5">
      <div className="">
        <h1 className="h1 text-center md:text-5xl text-2xl">{ data.title.resources }</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:mt-20 gap-5 p-2 px-2 md:px-5 py-5">
          {data.resourcesData.map((resource, index) => (
            <div
              key={index}
              className={`
                w-full md:w-1/3
                mb-8 md:mb-0
                px-5 py-5
                resource-img
                cursor-pointer
                transform transition-all duration-500 ease-in-out
                ${hoveredIndex !== null && hoveredIndex !== index ? "md:opacity-40 md:scale-95" : "md:opacity-100 md:scale-100"}
                md:hover:scale-105
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="resource-img-bg flex justify-center items-center mb-4">
                <img className="resource-element max-w-full h-auto" src={resource.img} alt={resource.alt} />
              </div>
              <h1 className="h1 md:text-3xl text-2xl mb-5 text-center">{resource.title}</h1>
              <p className="resources-p text-center">{resource.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;