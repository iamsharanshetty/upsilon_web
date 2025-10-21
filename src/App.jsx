// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Industries from "./components/Industries";
// import TechStack from "./components/TechStack";
// import Process from "./components/Process";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Industries />
//       <TechStack />
//       <Process />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

// Logo Component
const Logo = () => (
  <img
    src="https://raw.githubusercontent.com/user-attachments/assets/your-logo-path"
    alt="Upsilon AI"
    className="w-10 h-10"
    onError={(e) => {
      // Fallback to gradient box if image fails to load
      e.target.style.display = "none";
      e.target.nextSibling.style.display = "flex";
    }}
  />
);

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Services", "Projects", "Careers", "Contact"];

  const handleNavClick = (item) => {
    setCurrentPage(item.toLowerCase());
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick("Home")}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Υ</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Upsilon AI
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`transition-colors duration-200 font-medium ${
                  currentPage === item.toLowerCase()
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Component
const Hero = ({ setCurrentPage }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU2LDE4OSwyNDgsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
          <span className="text-cyan-400 text-sm font-semibold">
            Precision-Engineered AI Solutions
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Supercharge Your
          </span>
          <br />
          <span className="text-white">Scientific R&D</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Custom, high-performance AI pipelines for medicine, biotech, finance,
          and materials. No plug-and-play, just precision-engineered AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentPage("contact")}
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/50"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setCurrentPage("services")}
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
          >
            Explore Services
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-cyan-400 rotate-90" />
      </div>
    </section>
  );
};

// About Component
const About = () => {
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
};

// Industries Component
const Industries = () => {
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
    <section className="py-24 bg-slate-950">
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
};

// University Collaborations Component
const UniversityCollaborations = () => {
  const universities = [
    {
      name: "National University of Singapore",
      abbr: "NUS",
      logo: "🎓",
    },
    {
      name: "Massachusetts Institute of Technology",
      abbr: "MIT",
      logo: "🎓",
    },
    {
      name: "University of Cambridge",
      abbr: "Cambridge",
      logo: "🎓",
    },
  ];

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            University Collaborations
          </h2>
          <p className="text-xl text-slate-400">
            Partnering with world-leading research institutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {universities.map((uni, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {uni.logo}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {uni.abbr}
              </h3>
              <p className="text-slate-400 text-sm">{uni.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Page
const ServicesPage = () => {
  const services = [
    {
      title: "Custom AI Pipelines",
      description:
        "Precision-engineered workflows tailored to your scientific research needs. We design and implement end-to-end AI solutions that integrate seamlessly with your existing infrastructure.",
      features: [
        "Tailored Architecture",
        "Seamless Integration",
        "Scalable Solutions",
      ],
    },
    {
      title: "LLM & Embeddings",
      description:
        "Advanced language models and vector embeddings for complex data analysis. Leverage state-of-the-art NLP capabilities for your research workflows.",
      features: [
        "Custom Fine-tuning",
        "Domain-specific Models",
        "Vector Databases",
      ],
    },
    {
      title: "Scientific Computing",
      description:
        "High-performance computational solutions integrated with AI capabilities. Accelerate your research with optimized algorithms and parallel processing.",
      features: [
        "HPC Integration",
        "GPU Acceleration",
        "Distributed Computing",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Supercharge your proprietary workflows with measurable improvements in speed, accuracy, and insights through systematic optimization.",
      features: [
        "Code Profiling",
        "Algorithm Optimization",
        "Resource Management",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to accelerate your research and
            development
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">
                {service.title}
              </h2>
              <p className="text-slate-300 mb-6 text-lg">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Page
const ProjectsPage = () => {
  const projects = [
    {
      title: "Institutional Claims Auditor",
      description:
        "An advanced AI-powered system designed to streamline and automate the auditing process for institutional insurance claims. This solution leverages machine learning algorithms to detect anomalies, verify claim authenticity, and ensure compliance with regulatory standards.",
      features: [
        "Automated claim verification and validation",
        "AI-driven anomaly detection for fraud prevention",
        "Real-time compliance checking against regulatory frameworks",
        "Intelligent document processing and data extraction",
        "Comprehensive audit trail and reporting dashboard",
      ],
      technologies: ["Python", "TensorFlow", "NLP", "Computer Vision", "React"],
      link: "https://instutional-claims.vercel.app/",
      status: "Live",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Innovative AI solutions delivering real-world impact
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-cyan-400">
                    {project.title}
                  </h2>
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm">
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <span>Visit Project</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Careers Page
const CareersPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Build the future of AI-powered scientific research with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-xl border border-slate-700 text-center">
            <h2 className="text-3xl font-bold mb-6">We're Growing!</h2>
            <p className="text-slate-300 text-lg mb-8">
              We're always looking for talented individuals passionate about AI
              and scientific research. If you're interested in joining our team,
              we'd love to hear from you.
            </p>
            <div className="space-y-4">
              <p className="text-slate-400">
                Send your resume and portfolio to:
              </p>
              <a
                href="mailto:careers@upsilonai.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>careers@upsilonai.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-400">
            Ready to supercharge your research? Let's talk.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
              />
            </div>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Organization"
              className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about your project..."
              required
              className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/50"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
            <Mail className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-slate-400">contact@upsilonai.com</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
            <Phone className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-slate-400">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">Υ</span>
              </div>
              <span className="text-xl font-bold">Upsilon AI</span>
            </div>
            <p className="text-slate-400 text-sm">
              Precision-engineered AI pipelines for scientific R&D teams
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {["Home", "Services", "Projects", "Careers"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.toLowerCase());
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Medicine</li>
              <li>Biotech</li>
              <li>Finance</li>
              <li>Materials</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@upsilonai.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 Upsilon AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About />
            <Industries />
            <UniversityCollaborations />
          </>
        );
      case "services":
        return <ServicesPage />;
      case "projects":
        return <ProjectsPage />;
      case "careers":
        return <CareersPage />;
      case "contact":
        return <ContactPage />;
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About />
            <Industries />
            <UniversityCollaborations />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
