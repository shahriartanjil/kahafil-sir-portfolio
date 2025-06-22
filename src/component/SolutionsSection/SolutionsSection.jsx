import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const posts = [
  {
    category: "Cybersecurity",
    title: "Why Cybersecurity Is No Longer Optional For Businesses",
    date: "May 25, 2025",
    desc: "As our world becomes more digital, the threats facing organizations grow more complex and dangerous. Cybersecurity is no longer a luxury...",
    image: "https://i.postimg.cc/g0yCHRjD/Frame-1956.png",
  },
  {
    category: "Education, Social Impact",
    title: "Tech For Good: How Codeinnovior Is Shaping Future Innovators",
    date: "May 25, 2025",
    desc: "When we launched Codeinnovior, the mission was simple—make coding fun and accessible for kids. Technology shouldn't just be for...",
    image: "https://i.postimg.cc/PJJ0HR43/Frame-1956-1.png",
  },
];

export default function SolutionsSection() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
        some solutions that i created<span className="text-purple-600">.</span>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-20 text-xs uppercase tracking-widest text-gray-500 mb-10">
        <span className="font-semibold text-black">Blogs & Articles</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer">Public Speaking & Training</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer">Recent Event Activates</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer">Social Activities</span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="space-y-3">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg object-cover"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{post.category}</span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt /> {post.date}
              </span>
            </div>
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.desc}</p>
            <a
              href="#"
              className="text-xs font-semibold text-black hover:underline inline-flex items-center"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
