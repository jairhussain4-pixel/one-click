import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenLegal?: (tab: 'termos' | 'privacidade' | 'contato') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLegal }) => {
  return (
    <header className="w-full border-b border-purple-900/40 bg-astro-dark/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-200 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-yellow-500/20">
            <Sparkles className="w-4 h-4 fill-current text-slate-950" />
          </div>
          <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-yellow-100">
            Códigos da Alma
          </span>
        </div>
        <nav className="flex items-center space-x-4 text-xs md:text-sm text-purple-200/70">
          <button 
            onClick={() => onOpenLegal?.('contato')} 
            className="hover:text-yellow-400 transition-colors"
          >
            Contacto
          </button>
          <button 
            onClick={() => onOpenLegal?.('termos')} 
            className="hover:text-yellow-400 transition-colors hidden sm:inline"
          >
            Termos
          </button>
        </nav>
      </div>
    </header>
  );
};
