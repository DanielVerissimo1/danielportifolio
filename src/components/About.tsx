'use client';

import React, { useMemo } from 'react';
import { Code, Heart, Globe, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  
  const statsData = useMemo(() => [
    {
      icon: Heart,
      color: "from-[#6366f1] to-[#a855f7]",
      label: "Paixão",
      description: "Gerar valor por meio da tecnologia, explorando ideias, lendo livros, fazendo pesquisas e criando interfaces que conectam e inspiram.",
      animation: "fade-right",
    },
    {
      icon: Code,
      color: "from-[#a855f7] to-[#6366f1]",
      label: "Metodologia",
      description: "Pratico desenvolvimento ágil com foco em entregas eficientes, priorizando código limpo e de fácil manutenção.",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      label: "Localização",
      description: "Atualmente moro em Amontada-CE",
      animation: "fade-left",
    },
  ], []);

  return (
    <section id="about" className="relative z-20 py-20 px-[5%] sm:px-[10%] text-white bg-transparent">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Sobre Mim
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transformando Ideias Em Soluções Escaláveis
          <Sparkles className="w-5 h-5 text-purple-400" />
        </motion.p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Olá, Me Chamo
            </span>
            <span className="block mt-2 text-gray-200">
              Daniel Verissimo
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
           Sou um desenvolvedor Front-End movido pela curiosidade e pela vontade de transformar ideias em experiências digitais envolventes. Entre linhas de código e pixels, encontro o equilíbrio entre design e funcionalidade, explorando tecnologias como React, Next.js e Tailwind CSS para criar interfaces que encantam e entregam valor real.
          </motion.p>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-6 rounded-xl bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 border border-[#a855f7]/20 backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#6366f1]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-[#a855f7]/10 rounded-full blur-lg"></div>
            <blockquote className="relative italic text-gray-300">
              "Aproveitando a IA como uma ferramenta profissional, não como um substituto."
            </blockquote>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto  px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium hover:shadow-lg transition-all hover:scale-[1.02] flex items-center gap-2">
                <UserCheck className="w-5 h-5" /> Contate Me
              </button>
            </a>

            <a href="#Portofolio" className="w-full lg:w-auto">
              <button 
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full lg:w-auto cursor-pointer sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 "
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5" /> Ver Projetos
              </button>
              </a>
            
          </motion.div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/30 transition-all duration-500">
              <img
                src="/img-Daniel.png"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#a855f7]/50 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center justify-start mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm px-6 uppercase tracking-wider text-gray-300 mb-2">
                {stat.label}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-md text-gray-400">
                  {stat.description}
                </p>
                
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AboutSection;