import React from "react";

const items = [
  {
    year: "2019",
    title: "Bachelor Of Science",
    institute: "Daffodil International University",
  },
  {
    year: "2014",
    title: "Higher School Certificate",
    institute: "Daffodil International School",
  },
  {
    year: "2012",
    title: "Secondary School Certificate",
    institute: "Daffodil International School",
  },
  {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
  {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
  {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
  {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
  {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
    {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
  {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
  {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
  {
    year: "2001",
    title: "Microsoft Certified Architect",
    institute: "Microsoft",
  },
];

export default function EducationSection() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 w-full mx-auto text-center text-black bg-gray-200">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif mb-8 sm:mb-12">Education & Certifications</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-left">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="p-4 sm:p-5  rounded-lg  transition-all duration-300 "
          >
            <p className="text-xs sm:text-sm text-gray-500 mb-1">{item.year}</p>
            <h3 className="text-sm sm:text-md font-medium mb-1 sm:mb-2">{item.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600">{item.institute}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

