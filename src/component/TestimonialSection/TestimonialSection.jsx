import React from "react";

export default function TestimonialSection() {
  return (
    <section className="px-6 py-20 max-w-full mx-auto text-center bg-white">
      <div >
        {/* Label */}
      <h3 className="uppercase  tracking-widest text-4xl text-black mb-6">
        Testimonial
      </h3>

      {/* Quote */}
      <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8">
        “Kahafil Ora is a visionary leader with a rare blend of technical depth
        and strategic foresight. His insights on cybersecurity and infrastructure
        optimization have been invaluable to our team. Collaborating with him has
        always meant progress and clarity.”
      </p>

      {/* Author */}
      <p className="font-semibold text-sm text-black">Farzana Rahman</p>
      <p className="text-xs text-purple-600">CTO, Skylark Soft Limited</p>
      </div>
    </section>
  );
}
