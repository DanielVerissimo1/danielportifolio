'use client';

import React, { useMemo } from 'react';
import { Code, Heart, Globe, Sparkles, UserCheck } from 'lucide-react';
import { motion, useAnimation, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      } as Transition
    }
  };

  const statsData = useMemo(() => [
    {
      icon: Heart,
      color: "from-[#6366f1] to-[#a855f7]",
      label: "Paixão",
      description: "Gerar valor por meio da tecnologia, explorando ideias, lendo livros, fazendo pesquisas e criando interfaces que conectam e inspiram.",
      delay: 0.1
    },
    {
      icon: Code,
      color: "from-[#a855f7] to-[#6366f1]",
      label: "Metodologia",
      description: "Pratico desenvolvimento ágil com foco em entregas eficientes, priorizando código limpo e de fácil manutenção.",
      delay: 0.2
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      label: "Localização",
      description: "Atualmente moro em Amontada-CE",
      delay: 0.3
    },
  ], []);

  return (
    <section 
      id="about" 
      className="relative z-20 py-20 px-[5%] sm:px-[10%] text-white bg-transparent"
      ref={ref}
    >
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Sobre Mim
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transformando Ideias Em Soluções Escaláveis
          <Sparkles className="w-5 h-5 text-purple-400" />
        </motion.p>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="flex flex-col lg:flex-row gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Text Content */}
        <motion.div 
          className="lg:w-1/2 space-y-6"
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
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
            variants={itemVariants}
            className="text-gray-400 text-lg leading-relaxed"
          >
           Sou um desenvolvedor Front-End movido pela curiosidade e pela vontade de transformar ideias em experiências digitais envolventes.
          </motion.p>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="relative p-6 rounded-xl bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 border border-[#a855f7]/20 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 } as Transition}
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
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 } as Transition}
            >
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium hover:shadow-lg transition-all flex items-center gap-2">
                <UserCheck className="w-5 h-5" /> Contate Me
              </button>
            </motion.a>

            <motion.a 
              href="#portfolio" 
              className="w-full lg:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 } as Transition}
            >
              <button className="w-full lg:w-auto cursor-pointer sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10">
                <Code className="w-4 h-4 sm:w-5 sm:h-5" /> Ver Projetos
              </button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 } as Transition}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full blur-xl opacity-20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/30 transition-all duration-500">
              <motion.img
                src="/img-Daniel.png"
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.label}  
            variants={itemVariants}
            custom={stat.delay}
            transition={{ type: "spring", stiffness: 300, damping: 10 } as Transition}
            className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#a855f7]/50 transition-all"
          >
            <div className="flex items-center justify-start mb-4">
              <motion.div 
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${stat.color} bg-opacity-20`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 } as Transition}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
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