import React from "react";

const galleryImages = [
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
  "https://i.postimg.cc/GtYxFc70/Component-29.png",
  "https://i.postimg.cc/fRMfdQYF/Component-30.png",
  "https://i.postimg.cc/Pqxb6b3Q/Component-31.png",
  "https://i.postimg.cc/9fnds4s5/Component-32.png",
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
  
];

export default function GallerySection() {
  return (
    <section className="sm:px-6   ">
      {/* <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Gallery<span className="text-purple-600">.</span>
      </h2> */}

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
            className=" md:h-60 object-cover   "
          />
          </a>
        ))}
      </div>
    </section>
  );
}
