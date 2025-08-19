import React from 'react';
import { ExternalLink} from 'lucide-react';

interface CardProjectProps {
  Img: string;
  Title: string;
  Description: string;
  Link?: string;
  id?: string;
}

const CardProject: React.FC<CardProjectProps> = ({ Img, Title, Description, Link: ProjectLink, id }) => {

  return (
    <div className="group relative w-full h-full">
      <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/30">
        {/* Efeito de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        {/* Conteúdo principal */}
        <div className="relative h-full flex flex-col p-5 z-10">
          {/* Imagem do projeto */}
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
        
          <div className="mt-4 space-y-3 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {Title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-3 flex-1">
              {Description}
            </p>
            
            {/* Botões de ação */}
            <div className="pt-4 flex items-center justify-between gap-2">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20"
                >
                  <span className="text-sm font-medium">Ver No Ar</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm px-3 py-1.5">Demo Not Available</span>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;