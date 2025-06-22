import React from "react";

const clients = [
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
  {
    name: "MAHEEN ACCESSORIES LIMITED",
    logo: "https://i.postimg.cc/QCvNZhjd/MAL-Logo-e1701627722238-1.png",
  },
];

export default function ClientsSection() {
  return (
    <section className="px-6 py-20 max-w-full mx-auto text-center overflow-hidden bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-black">
        I help brands to drive results.
      </h2>

      {/* \ Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee space-x-16">
          {clients.concat(clients).map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 min-w-[150px]"
            >
              <img
                src={client.logo}
                alt={`${client.name} Logo`}
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
              <p className="text-xs uppercase tracking-widest text-gray-600">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
