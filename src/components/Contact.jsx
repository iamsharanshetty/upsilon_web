import React, { useState } from "react";

export default function Contact() {
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
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-400">
            Ready to supercharge your research? Let's talk.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
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
            className="w-full px-6 py-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-slate-500 resize-none"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-cyan-500/50"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
