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
    <section className="px-20 py-20 max-w-full mx-auto text-center text-black bg-gray-200">
      {/* Heading */}
      <h2 className="text-3xl font-serif mb-12">Education & Certifications</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
        {items.map((item, index) => (
          <div key={index} className="space-y-1">
            <p className="text-sm text-gray-400">{item.year}</p>
            <h3 className="text-md font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.institute}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
