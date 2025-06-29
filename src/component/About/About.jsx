import React from "react";

export default function About() {
  return (
    <section className="px-6 py-20 sm:text-center max-w-full text-center text-gray-800 bg-white">
      {/* Heading */}
      <h3 className="uppercase tracking-widest text-xs mb-4">About Kahafil Ora</h3>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
        Kahafil Ora is an experienced IT consultant known for delivering smart, tech-driven 
        solutions to businesses. With a strong grasp of IT infrastructure and digital 
        strategy, he helps organizations improve efficiency and achieve their goals through 
        innovative technology.
      </p>

      <hr className="my-12 border-gray-300" />

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left Info */}
        <div className="text-left space-y-6 lg:ml-20">
          <div className="">
            <h4 className="uppercase tracking-widest text-xs mb-2">Driving digital innovation across Bangladesh and beyond</h4>
            <ul className="">
              <li>Mentor</li>
              <li>IT Strategist</li>
              <li>Tech Entrepreneur</li>
              <li>Cybersecurity Advocate</li>
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs mb-2">Contact</h4>
            <p>Kahafil Ora</p>
            <p>Dhaka | Bangladesh</p>
            <p>+880 1622-992222</p>
            <p>kahafil@goinnovior.com</p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img 
            src="https://i.postimg.cc/3Rg6t1Vb/Property-1-Group-2.png" 
            alt="Kahafil Ora" 
            className="rounded-3xl object-cover saturate-0 hover:saturate-100"
          />
        </div>

        {/* Right Stats */}
        <div className=" flex sm:flex-col flex-row sm:justify-center gap-6 text-center lg:mr-20 md:text-right space-y-6">
          <div>
            <h4 className="uppercase tracking-widest text-xs mb-2">Years of Experience</h4>
            <p className="text-4xl font-bold">22+</p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs mb-2">Satisfaction Clients</h4>
            <p className="text-4xl font-bold">100%</p>
          </div>
          <div>
            <h4 className="uppercase tracking-widest text-xs mb-2">Clients Worldwide</h4>
            <p className="text-4xl font-bold">70+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
