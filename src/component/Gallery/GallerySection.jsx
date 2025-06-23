import React from "react";

const galleryImages = [
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
  "https://i.postimg.cc/GtYxFc70/Component-29.png",
  "https://i.postimg.cc/fRMfdQYF/Component-30.png",
  "https://i.postimg.cc/Pqxb6b3Q/Component-31.png",
  "https://i.postimg.cc/9fnds4s5/Component-32.png",
  "https://i.postimg.cc/43NPDRdt/Component-28.png",
];

export default function GallerySection() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto overflow-x-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Gallery<span className="text-purple-600">.</span>
      </h2>

      {/* Single Line Flex Row */}
      <div className="flex flex-nowrap gap-4">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="h-48 md:h-60 object-cover rounded-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
