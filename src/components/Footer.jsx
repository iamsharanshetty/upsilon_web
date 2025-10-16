import React from "react";
import { Zap, Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Upsilon AI</span>
            </div>
            <p className="text-slate-400 text-sm">
              Precision-engineered AI pipelines for scientific R&D teams
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Custom AI Pipelines
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  LLM Integration
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Scientific Computing
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="#industries"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Medicine
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Biotech
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Finance
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Materials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
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

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 Upsilon AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
