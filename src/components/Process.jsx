import React from "react";
import { ChevronRight } from "lucide-react";

export default function Process() {
  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "Deep dive into your research workflow",
    },
    {
      step: "02",
      title: "Architecture",
      desc: "Design custom AI pipeline architecture",
    },
    {
      step: "03",
      title: "Development",
      desc: "Build and integrate AI components",
    },
    {
      step: "04",
      title: "Optimization",
      desc: "Fine-tune for maximum performance",
    },
    {
      step: "05",
      title: "Deployment",
      desc: "Seamless integration with your systems",
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-xl text-slate-400">
            A systematic approach to building your AI pipeline
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {process.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
              {idx < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ChevronRight className="w-6 h-6 text-cyan-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
