'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, User, FileText, Code } from 'lucide-react';

const HeroSection = () => {
  const MOCK_DATA = {
    welcomeTexts: ["Welcome", "To", "My"],
    titleTexts: ["Portfolio", "Website"],
    icons: [Code2, User, Github]
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
          <motion.div 
            className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {MOCK_DATA.icons.map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="relative group hover:scale-110 transition-transform duration-300">
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
                  <div className="relative p-3 sm:p-4 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Welcome Text */}
          <motion.div 
            className="mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold space-y-4 sm:space-y-6">
              <div className="mb-4 sm:mb-6">
                {MOCK_DATA.welcomeTexts.map((text, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                    className="inline-block px-2 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
                  >
                    {text}
                  </motion.span>
                ))}
              </div>
              <div>
                {MOCK_DATA.titleTexts.map((text, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                    className="inline-block px-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {text}
                  </motion.span>
                ))}
              </div>
            </h1>
          </motion.div>

          {/* Buttons - Versão atualizada */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 w-full max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.a
              href="https://drive.google.com/drive/u/2/folders/1-NsOj14ARCHzi-w-ku4aTw4oQ_ZkLJir"
              className="w-full lg:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
              </button>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="w-full lg:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10">
                <Code className="w-4 h-4 sm:w-5 sm:h-5" /> Contact
              </button>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-indigo-400 rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;