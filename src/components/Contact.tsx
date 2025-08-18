'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    AOS.init({
      once: false,
    });
  }, []);

  if (!isMounted) return null;

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%]" id="contato" >
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Entre em Contato
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Tem alguma pergunta? Envie-me uma mensagem e responderei o mais breve possível.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center 2xl:pr-[3.1%] lg:pr-[3.8%] md:px-0"
        id="Contact"
      >
        <div className="container px-[1%] grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-[#6366f1]/10"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Envie uma mensagem!
              </h2>
              <p className="text-gray-400">
                Me conte mais como posso te ajudar!
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Coluna das Redes Sociais */}
          <div
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-[#6366f1]/10"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Acesse minhas redes:
              </h2>
              <p className="text-gray-400  mb-7">
                Me conte mais como posso te ajudar!
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;