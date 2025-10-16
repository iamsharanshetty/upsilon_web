import React from "react";
import { CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "No Plug-and-Play",
      desc: "Every solution is engineered specifically for your research needs",
    },
    {
      title: "Scientific Rigor",
      desc: "Built by researchers who understand the complexity of your domain",
    },
    {
      title: "Performance First",
      desc: "Measurable improvements in speed, accuracy, and insights",
    },
  ];

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Upsilon AI?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We don't believe in one-size-fits-all AI. We build custom pipelines
            that integrate seamlessly with your proprietary workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <CheckCircle className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
