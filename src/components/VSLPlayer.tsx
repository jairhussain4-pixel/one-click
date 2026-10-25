import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Award, CheckCircle2, Play, Sparkles } from 'lucide-react';

interface VSLPlayerProps {
  onBackToReport: () => void;
  checkoutUrl?: string;
}

export const VSLPlayer: React.FC<VSLPlayerProps> = ({ 
  onBackToReport, 
  checkoutUrl = "https://pay.kirvano.com/" 
}) => {
  // Can be controlled to show button after X seconds (e.g., 60s or immediately for testing)
  const [showCheckout, setShowCheckout] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Optional timer for delayed CTA
  useEffect(() => {
    // Default showCheckout is true so user can always test the button
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 animate-fadeIn">
      {/* Kicker & Headline */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-semibold mb-3 border border-yellow-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Apresentação Exclusiva Personalizada</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-100 leading-tight mb-3">
          A Revelação Cabalística Completa do Seu Destino
        </h1>
        <p className="text-purple-200/70 text-sm md:text-base max-w-xl mx-auto">
          Assista ao vídeo abaixo com atenção para entender como ativar as frequências de prosperidade da sua data de nascimento.
        </p>
      </div>

      {/* Video Container (VTurb / ConverteAI compatible) */}
      <div className="astro-card rounded-2xl overflow-hidden border border-yellow-500/40 p-2 sm:p-4 mb-8 relative shadow-2xl">
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center group">
          {/* VTurb Smartplayer Embed or Fallback Player */}
          <div id="personalized-video-p1" className="w-full h-full flex items-center justify-center">
            {/* If VTurb script is loaded */}
            <div className="text-center p-6">
              <div 
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 flex items-center justify-center mx-auto mb-4 cursor-pointer shadow-lg shadow-yellow-500/50 hover:scale-105 transition-all"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <p className="text-yellow-100 text-sm font-semibold mb-1">
                {isPlaying ? "Vídeo em Reprodução..." : "Clique Para Iniciar o Vídeo"}
              </p>
              <p className="text-xs text-purple-300/60">
                Ligue o som para ouvir todos os detalhes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout / CTA Box */}
      {showCheckout && (
        <div className="astro-card rounded-2xl p-6 sm:p-8 text-center border-2 border-yellow-500/50 relative overflow-hidden mb-10 astro-glow animate-fadeIn">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />

          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 rounded-full text-xs font-bold tracking-wider uppercase mb-3 inline-block">
            Oferta Especial do Consultante
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-yellow-100 mb-2">
            Desbloqueie o Seu Dossiê Completo + 3 Bônus
          </h2>

          <p className="text-purple-200/80 text-sm mb-6 max-w-md mx-auto">
            Acesso vitalício ao Mapa Cabalístico Detalhado, Rituais de Prosperidade e suporte prioritário.
          </p>

          <div className="mb-6 flex items-baseline justify-center space-x-2">
            <span className="text-purple-300/60 line-through text-sm">De R$ 97,00</span>
            <span className="text-xs text-purple-300">por apenas</span>
            <span className="font-serif text-4xl font-extrabold text-yellow-400">
              R$ 29,90
            </span>
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block py-4 px-6 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-400 text-white font-black text-lg md:text-xl rounded-xl shadow-xl shadow-emerald-900/50 transform hover:scale-[1.02] active:scale-[0.98] transition-all mb-4"
          >
            SIM! QUERO MEU MAPA COMPLETO AGORA
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-purple-200/70">
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia Incondicional de 7 Dias</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Lock className="w-4 h-4 text-yellow-400" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Acesso Imediato por E-mail</span>
            </div>
          </div>
        </div>
      )}

      {/* Back button to Report */}
      <div className="text-center">
        <button
          onClick={onBackToReport}
          className="text-xs text-purple-300/70 hover:text-yellow-400 underline transition-colors"
        >
          &larr; Voltar para a leitura do Mapa Numerológico
        </button>
      </div>
    </div>
  );
};
