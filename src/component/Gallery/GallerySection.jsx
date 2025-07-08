import React from "react";

const galleryImages = [
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
  "https://i.postimg.cc/GtYxFc70/Component-29.png",
  "https://i.postimg.cc/fRMfdQYF/Component-30.png",
  "https://i.postimg.cc/Pqxb6b3Q/Component-31.png",
  "https://i.postimg.cc/9fnds4s5/Component-32.png",
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
    "https://i.postimg.cc/9fnds4s5/Component-32.png",
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
  
];

export default function GallerySection() {
  return (
    <section className="   ">

      {/* Single Line Flex Row */}
      <div className="flex ">
        {galleryImages.map((img, index) => (
          <a 
          key={index}
          href={img}
          target="_blank"
          rel="noopener noreferrer"

          >
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className=" md:h-60   w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
          />

          {/* Instagram Icon Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
              className="w-10 h-10"
            />
          </div>
          </a>

        ))}
      </div>
    </section>
  );
}
