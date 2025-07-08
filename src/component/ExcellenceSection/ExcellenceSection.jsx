import React from "react";

const services = [
  {
    title: "Digital Transformation Strategy",
    desc: "Helping Businesses Modernize Operations Through Tailored Digital Adoption Frameworks.",
    image: "https://i.postimg.cc/wMNhX4r7/Mac-Book-Air-1.png",
  },
  {
    title: "IT Infrastructure & Cybersecurity",
    desc: "Providing Expert Advice On Building Scalable, Secure Systems And Ensuring Robust Network Security.",
    image: "https://i.postimg.cc/8z4Lm6ZB/Mac-Book-Air-1-1.png",
  },
  {
    title: "Startup & Innovation Coaching",
    desc: "Guiding Early-Stage Founders With Business Modeling, Product Market Fit, Branding, And More.",
    image: "https://i.postimg.cc/PJ1wppLD/Mac-Book-Air-1-2.png",
  },
  {
    title: "EdTech & Learning Program Design",
    desc: "Designing Educational Platforms And Training Programs For Institutions That Want To Empower.",
    image: "https://i.postimg.cc/qv1C3d71/Mac-Book-Air-1-3.png",
  },
  {
    title: "IT Infrastructure & Cybersecurity",
    desc: "Providing Expert Advice On Building Scalable, Secure Systems And Ensuring Robust Network Security.",
    image: "https://i.postimg.cc/8z4Lm6ZB/Mac-Book-Air-1-1.png",
  },
  {
    title: "Startup & Innovation Coaching",
    desc: "Guiding Early-Stage Founders With Business Modeling, Product Market Fit, Branding, And More.",
    image: "https://i.postimg.cc/PJ1wppLD/Mac-Book-Air-1-2.png",
  },
  {
    title: "EdTech & Learning Program Design",
    desc: "Designing Educational Platforms And Training Programs For Institutions That Want To Empower.",
    image: "https://i.postimg.cc/qv1C3d71/Mac-Book-Air-1-3.png",
  },
];

export default function Services() {
  return (
    <section className=" px-4 py-3 sm:px-6 lg:px-34 lg:py-16 max-w-full items-center bg-gray-200 text-black sm:grid-auto-columns: auto">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        creating excellence through collaboration and innovation.
      </h2>

      <hr className="my-12 border-gray-300" />

      {/* Carousel */}
      <div className="relative">
        {/* Horizontal Scroll */}
        <div className="  sm:grid-cols-1 flex overflow-x-auto no-scrollbar space-x-6 pb-4 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-none w-64 md:w-72 bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-36 object-cover rounded-md mb-4"
              />
              <h3 className="text-sm font-semibold mb-2 uppercase">
                {service.title}
              </h3>
              <p className="text-xs text-gray-600 mb-4">{service.desc}</p>
              <a
                href="#"
                className="text-sm font-semibold text-black hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Optional Arrows (dummy, add logic if needed) */}
        <div className="absolute right-0 top-0 flex gap-4">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            ←
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
