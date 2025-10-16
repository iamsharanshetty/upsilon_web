import React from "react";

export default function TechStack() {
  const technologies = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "Transformers",
    "CUDA",
    "Docker",
    "AWS",
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-slate-400">
            Powered by cutting-edge tools and frameworks
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 font-semibold hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
