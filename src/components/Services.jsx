import React from "react";
import { Brain, Database, Zap, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Custom AI Pipelines",
      description:
        "Precision-engineered workflows tailored to your scientific research needs",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "LLM & Embeddings",
      description:
        "Advanced language models and vector embeddings for complex data analysis",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Scientific Computing",
      description:
        "High-performance computational solutions integrated with AI capabilities",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Performance Optimization",
      description:
        "Supercharge your proprietary workflows with measurable improvements",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to accelerate your research and
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
