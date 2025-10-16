import React from "react";

export default function Industries() {
  const industries = [
    {
      name: "Medicine",
      desc: "Accelerate drug discovery and clinical research",
    },
    {
      name: "Biotech",
      desc: "Transform genomic analysis and protein modeling",
    },
    {
      name: "Finance",
      desc: "Advanced quantitative analysis and risk modeling",
    },
    {
      name: "Materials",
      desc: "Computational materials science and discovery",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-slate-400">
            Domain expertise across critical scientific sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {industry.name}
              </h3>
              <p className="text-slate-400 text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
