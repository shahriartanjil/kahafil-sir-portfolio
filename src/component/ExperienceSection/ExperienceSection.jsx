import React from "react";

const experiences = [
  {
    company: "Goinnovior Limited",
    role: "Founder & Managing Director",
    date: "2016–Present",
  },
  {
    company: "360D Soul Limited",
    role: "Founder & Managing Director",
    date: "2023–Present",
  },
  {
    company: "CodeInnovior",
    role: "Founder & Managing Director",
    date: "2020–Present",
  },
  {
    company: "Skylark Soft Limited",
    role: "Head of Businesses",
    date: "2022–2024",
  },
  {
    company: "Impress Group",
    role: "Head of Information Technology Operations",
    date: "2018–2022",
  },
  {
    company: "Next IT Ltd.",
    role: "Founder & Managing Director",
    date: "2016–2018",
  },
  {
    company: "MASCO Group",
    role: "Head of Information Technology Department",
    date: "2010–2016",
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-6 py-20 max-w-8xl mx-auto bg-white">
      {/* Heading */}
      <div className="lg:px-30">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
        experience<span className="text-purple-600">.</span>
      </h2>
      <hr className="my-6 border-gray-300" />

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Text */}
        <div className="md:col-span-1 text-gray-700 text-base leading-relaxed">
          I’ve worked with companies and clients, both in agency settings. I
          enjoy collaborating with clients who appreciate the importance of good
          design.
        </div>

        {/* Experience List */}
        <div className="md:col-span-2 text-black">
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
            {experiences.map((exp, index) => (
              <React.Fragment key={index}>
                <div className="py-4 px-2 border-b border-gray-200">
                  <p className="font-medium">{exp.company}</p>
                </div>
                <div className="py-4 px-2 border-b border-gray-200 md:col-span-1">
                  <p className="text-gray-600">{exp.role}</p>
                </div>
                <div className="py-4 px-2 border-b border-gray-200 text-right">
                  <p className="text-sm text-gray-500">{exp.date}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
