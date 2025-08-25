'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, FileText, UserCheck, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true,
      offset: 100,
    });
  }, []);

  const dados = {
    welcomeTexts: ["Daniel", "Verissimo"],
    titleTexts: ["Desenvolvedor", "Front-end"],
    icons: [Mail, Linkedin, Github],
    hrefs: [
      "mailto:danielsantoss1300@gamil.com", 
      "https://linkedin.com/in/daniel-verissimo",
      "https://github.com/DanielVerissimo1"
    ]
  }; 

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div 
            className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {dados.icons.map((Icon, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                <div className="relative cursor-pointer group hover:scale-110 transition-transform duration-300">
                  <div className="absolute cursor-pointer -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
                  <div className="relative p-3 sm:p-4 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                    <a href={dados.hrefs[index]} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-6 h-6 sm:w-7 cursor-pointer sm:h-7 md:w-8 md:h-8 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Welcome Text */}
          <div 
            className="mb-8 sm:mb-10 md:mb-12"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <div className="mb-4 sm:mb-6">
                {dados.welcomeTexts.map((text, index) => (
                  <span
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={400 + (index * 150)}
                    className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                  >
                    {text}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center">
                {dados.titleTexts.map((text, index) => (
                  <span
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={500 + (index * 150)}
                    className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </h1>
          </div>

          {/* Buttons*/}
            <div 
              className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 w-full max-w-md mx-auto"
              data-aos="fade-up"
              data-aos-delay="700"
            >
            <div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <a 
                href="/Daniel Verissimo - Currículo.pdf"
                download
                className="w-full sm:w-auto"
              >
                <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium hover:shadow-lg transition-all hover:scale-[1.02] flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Download CV
                </button>
              </a>
              <a 
                href="#contato" 
                className="w-full sm:w-auto"
              >
                <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium hover:bg-[#a855f7]/10 transition-all hover:scale-[1.02] flex items-center gap-2">
                  <UserCheck className="w-5 h-5" /> Contate Me
                </button>
              </a>
            </div>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-indigo-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;