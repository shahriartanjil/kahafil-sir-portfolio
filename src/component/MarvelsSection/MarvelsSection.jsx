import React from "react";
import { FaCrown } from "react-icons/fa"; 

const recognitions = [
  {
    org: "SkillJobs",
    title: "Panelist, IT Job Fair",
    year: "2024",
  },
  {
    org: "IBA, University of Dhaka",
    title: "ACMP 4.0",
    year: "2025",
  },
  {
    org: "SkillJobs",
    title: "Speaker, Chakrimela 2025",
    year: "2025",
  },
];

export default function MarvelsSection() {
  return (
    <section className="px-26 py-20 max-w-full mx-auto bg-fuchsia-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black">
        metric marvels<span className="text-purple-600">.</span>
      </h2>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Metric */}
        <div className="flex flex-col items-start space-y-4">
          <FaCrown className="text-3xl text-gray-700" />
          <p className="uppercase text-xs tracking-widest text-gray-600">
            Awards & Recognition
          </p>
          <p className="text-5xl font-bold text-gray-800">50+</p>
        </div>

        {/* Right Recognitions */}
        <div className="md:col-span-2 w-full text-black">
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300">
            {recognitions.map((rec, index) => (
              <React.Fragment key={index}>
                <div className="py-4 px-2 border-b border-gray-300">
                  <p className="font-medium">{rec.org}</p>
                </div>
                <div className="py-4 px-2 border-b border-gray-300 md:col-span-1">
                  <p className="text-gray-600">{rec.title}</p>
                </div>
                <div className="py-4 px-2 border-b border-gray-300 text-right">
                  <p className="text-sm text-gray-500">{rec.year}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
