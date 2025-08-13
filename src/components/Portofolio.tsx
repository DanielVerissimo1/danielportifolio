'use client';
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Award, Boxes } from "lucide-react";
import  CardProject  from "./CardProject";
import TechStackIcon from "./TechStackIcon";
import Certificate from "./Certificate";

// Tipos TypeScript
interface Project {
  id: number;
  Img: string;
  Title: string;
  Description: string;
  Link: string;
}

interface Certificate {
  id: number;
  Img: string;
}

interface TechStack {
  icon: string;
  language: string;
}

// Dados mocados
const mockProjects: Project[] = [
  {
    id: 1,
    Img: "/amotur.jpeg",
    Title: "Mapa interativo - AmoTur",
    Description: "Desenvolvido em colaboração com a Squad do Amontada Valley, este projeto foi criado para atender a uma demanda real da Associação de Turismo Amotur.",
    Link: "https://amotur-k1qt.vercel.app/",
  },
  {
    id: 2,
    Img: "/cafearoma.jpeg",
    Title: "Site - Café Aroma",
    Description: "Site completo desenvolvido para o Café Aroma, com foco em navegação intuitiva, pedidos online, reserva de mesas e loja virtual.",
    Link: "https://danielsantoss1200.wixsite.com/my-site-1",
  },
  {
    id: 3,
    Img: "/rio.jpeg",
    Title: "Landing Page - Projeto Rio Aracatiaçu",
    Description: "Landing page desenvolvida para o projeto Rio Aracatiaçu: Passado e Futuro Sustentável, apresentada no Ceará Científico 2025. A proposta uniu design, educação ambiental e engajamento comunitário para promover a preservação do rio em Amontada-CE.",
    Link: "https://rio-aracatia-u.vercel.app/",
  },
  {
    id: 4,
    Img: "/briso.png",
    Title: "Brisô Delivery",
    Description: "Brisô Delivery é uma plataforma que conecta moradores e turistas de Icaraí de Amontada a comércios e serviços locais. Criado para resolver a dificuldade de encontrar entregas e estabelecimentos, antes feitos apenas por indicações informais.",
    Link: "https://briso-delivery.vercel.app/",
  }
  
];

const mockCertificates: Certificate[] = [
  {
    id: 1,
    Img: "/InovationCertificado.png",
  },
  {
    id: 2,
    Img: "/aws.png",
  },
];

const techStacks: TechStack[] = [
  { icon: "/html.svg", language: "HTML" },
  { icon: "/css.svg", language: "CSS" },
  { icon: "/javascript.svg", language: "JavaScript" },
  { icon: "/reactjs.svg", language: "React" },
  { icon: "/next.svg", language: "Next.js" },
  { icon: "/nodejs.svg", language: "Node.js" },
  { icon: "/tailwind.svg", language: "Tailwind CSS" },
  { icon: "/bootstrap.svg", language: "Bootstrap" },
  { icon: "/MUI.svg", language: "Material UI" },
  { icon: "/vite.svg", language: "Vite" },
  { icon: "/vercel.svg", language: "Vercel" }
];

const ToggleButton = ({ 
  onClick, 
  isShowingMore 
}: {
  onClick: () => void;
  isShowingMore: boolean;
}) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

const TabPanel = ({ 
  children, 
  value, 
  index 
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
  >
    {value === index && <div className="p-1 sm:p-3">{children}</div>}
  </div>
);

const Portfolio = () => {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setProjects(mockProjects);
    setCertificates(mockCertificates);
  }, []);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const toggleShowMore = (type: 'projects' | 'certificates') => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full z-1000 sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="portfolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Mostruário de Portfólio
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore minha jornada através de projetos, certificações e experiência técnica. Cada seção representa um marco na minha trajetória de aprendizado contínuo.
        </p>
      </div>

      <div className="w-full">
        {/* AppBar substituto */}
        <div className="relative bg-transparent rounded-2xl border border-white/10 mb-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 backdrop-blur-sm border"></div>
          
          <div className="relative flex">
            {['Projetos', 'Certificações', 'Tecnologias'].map((label, index) => (
              <button
                key={index}
                onClick={() => handleChange(index)}
                className={`flex-1 py-5 px-0 text-center transition-all duration-300 rounded-2xl m-2 ${
                  value === index 
                    ? 'text-white bg-gradient-to-br from-purple-500/20 to-blue-500/20 shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex flex-col items-center">
                  {index === 0 && <Code className="mb-2 w-5 h-5" />}
                  {index === 1 && <Award className="mb-2 w-5 h-5" />}
                  {index === 2 && <Boxes className="mb-2 w-5 h-5" />}
                  <span className="text-sm font-medium">{label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo das abas */}
        <TabPanel value={value} index={0}>
          <div className="container z-100 mx-auto flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
              {displayedProjects.map((project, index) => (
                <div
                  key={project.id || index}
                  data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                  data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                >
                  <CardProject
                    Img={project.Img}
                    Title={project.Title}
                    Description={project.Description}
                    Link={project.Link}
                    id={project.id.toString()}
                  />
                </div>
              ))}
            </div>
          </div>
          {projects.length > initialItems && (
            <div className="mt-6 w-full flex justify-start">
              <ToggleButton
                onClick={() => toggleShowMore('projects')}
                isShowingMore={showAllProjects}
              />
            </div>
          )}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className="container mx-auto flex justify-center items-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
              {displayedCertificates.map((certificate, index) => (
                <div
                  key={certificate.id || index}
                  data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                  data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                >
                  <Certificate ImgSertif={certificate.Img} />
                </div>
              ))}
            </div>
          </div>
          {certificates.length > initialItems && (
            <div className="mt-6 w-full flex justify-start">
              <ToggleButton
                onClick={() => toggleShowMore('certificates')}
                isShowingMore={showAllCertificates}
              />
            </div>
          )}
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
              {techStacks.map((stack, index) => (
                <div
                  key={index}
                  data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                  data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                >
                  <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </div>
    </div>
  );
};

export default Portfolio; 