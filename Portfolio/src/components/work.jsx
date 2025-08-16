import React from "react";
import work1 from "../assets/work1.PNG";
import aivis from "../assets/aivis2.PNG";

const Work = () => {
  const projects = [
    {
      title: "AI-Powered Video Interviews",
      description:
        "Revolutionize hiring with real-time AI analysis, dynamic questioning, and comprehensive candidate evaluation that saves time and identifies top talent.",
      image: aivis,
      link: "https://jovial-khapse-b785e4.netlify.app/",
    },
    {
      title: "React & Tailwind Project",
      description:
        "This is a short description of the project. Built with React & TailwindCSS.",
      image: work1,
      link: "https://example.com",
    },
    {
      title: "React & Tailwind Project",
      description:
        "This is a short description of the project. Built with React & TailwindCSS.",
      image: work1,
      link: "https://example.com",
    },
    {
      title: "React & Tailwind Project",
      description:
        "This is a short description of the project. Built with React & TailwindCSS.",
      image: work1,
      link: "https://example.com",
    },
    
  ];

  return (
    <div className="max-w-5xl mx-auto mb-20">
      {/* Heading */}
      <div className="font-Ovo text-center mb-12">
        <div className="mb-10">My portfolio</div>
        <div className="text-4xl">My latest work</div>
      </div>

      {/* Portfolio Grid */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-56 rounded-xl overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center px-4">
                <p className="text-sm font-medium">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex items-center justify-center mt-5">
        <button className="border-2 border-gray-600 rounded-4xl py-2 px-5 text-sm font-Ovo font-extralight">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Work;
