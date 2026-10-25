import React, { useEffect, useState } from 'react';
import { Sparkles, Compass, Eye, ShieldCheck } from 'lucide-react';

interface AnalyzingModalProps {
  onFinished: () => void;
  userName: string;
}

const statusMessages = [
  "Sincronizando com as frequências cósmicas...",
  "Calculando seu Número da Alma através das vogais sagradas...",
  "Decodificando seu Número de Expressão terrena...",
  "Mapeando o Caminho de Destino e Lições Kármicas...",
  "Identificando bloqueios ocultos e trânsitos de poder...",
  "Seu Mapa Numerológico Cabalístico está pronto!"
];

export const AnalyzingModal: React.FC<AnalyzingModalProps> = ({ onFinished, userName }) => {
  const [progress, setProgress] = useState<number>(5);
  const [msgIndex, setMsgIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onFinished();
          }, 800);
          return 100;
        }
        const next = prev + 2;
        if (next > 20 && next <= 40) setMsgIndex(1);
        else if (next > 40 && next <= 60) setMsgIndex(2);
        else if (next > 60 && next <= 80) setMsgIndex(3);
        else if (next > 80 && next < 98) setMsgIndex(4);
        else if (next >= 98) setMsgIndex(5);
        return next;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-12 text-center animate-fadeIn">
      <div className="astro-card rounded-3xl p-8 border border-yellow-500/30 relative">
        <div className="w-24 h-24 mx-auto mb-6 relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-yellow-400/20 border-t-yellow-400 animate-spin" />
          <div className="w-16 h-16 rounded-full bg-purple-900/60 border border-yellow-400/40 flex items-center justify-center">
            {progress < 35 && <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />}
            {progress >= 35 && progress < 70 && <Compass className="w-8 h-8 text-yellow-400 animate-pulse" />}
            {progress >= 70 && progress < 95 && <Eye className="w-8 h-8 text-yellow-400 animate-pulse" />}
            {progress >= 95 && <ShieldCheck className="w-8 h-8 text-yellow-400" />}
          </div>
        </div>

        <h3 className="font-serif text-2xl font-bold text-yellow-100 mb-2">
          Analisando o Perfil de {userName || 'Sua Alma'}
        </h3>

        <p className="text-yellow-400/90 text-sm font-medium h-12 flex items-center justify-center px-4 mb-6">
          {statusMessages[msgIndex]}
        </p>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-purple-950 rounded-full overflow-hidden border border-purple-800/60 p-0.5 mb-3">
          <div 
            className="h-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-amber-300 rounded-full transition-all duration-150 shadow-md shadow-yellow-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-xs text-purple-300/80 font-mono">
          {progress}% completo
        </div>
      </div>
    </div>
  );
};
