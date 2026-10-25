import React, { useState } from 'react';
import { UserQuizData, NumerologyResults } from './types';
import { 
  calcularNumeroAlma, 
  calcularNumeroExpressao, 
  calcularNumeroDestino, 
  obterSigno 
} from './data/numerology';
import { Header } from './components/Header';
import { QuizStep } from './components/QuizStep';
import { AnalyzingModal } from './components/AnalyzingModal';
import { ReportView } from './components/ReportView';
import { VSLPlayer } from './components/VSLPlayer';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'quiz' | 'analyzing' | 'report' | 'vsl'>('quiz');
  
  const [quizData, setQuizData] = useState<UserQuizData>({
    gender: null,
    day: '15',
    month: '6',
    year: '1995',
    hour: '12',
    minute: '00',
    city: '',
    civilStatus: null,
    fullName: ''
  });

  const [results, setResults] = useState<NumerologyResults>({
    numeroAlma: 1,
    numeroExpressao: 3,
    numeroDestino: 7,
    signo: 'Gêmeos'
  });

  const [legalTab, setLegalTab] = useState<'termos' | 'privacidade' | 'contato' | null>(null);

  const handleQuizComplete = (data: UserQuizData) => {
    setQuizData(data);

    // Compute numerological values
    const alma = calcularNumeroAlma(data.fullName);
    const expressao = calcularNumeroExpressao(data.fullName);
    const destino = calcularNumeroDestino(data.day, data.month, data.year);
    const signo = obterSigno(data.day, data.month);

    setResults({
      numeroAlma: alma,
      numeroExpressao: expressao,
      numeroDestino: destino,
      signo
    });

    setCurrentView('analyzing');
  };

  const handleAnalyzingFinished = () => {
    setCurrentView('report');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between text-slate-100 bg-[#0d0a1a]">
      {/* Top Header */}
      <Header onOpenLegal={tab => setLegalTab(tab)} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center py-6">
        {currentView === 'quiz' && (
          <QuizStep onComplete={handleQuizComplete} />
        )}

        {currentView === 'analyzing' && (
          <AnalyzingModal 
            userName={quizData.fullName} 
            onFinished={handleAnalyzingFinished} 
          />
        )}

        {currentView === 'report' && (
          <ReportView 
            quizData={quizData} 
            results={results} 
            onGoToVideo={() => setCurrentView('vsl')} 
          />
        )}

        {currentView === 'vsl' && (
          <VSLPlayer 
            onBackToReport={() => setCurrentView('report')} 
            checkoutUrl="https://pay.kirvano.com/"
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-purple-950 bg-black/40 py-6 text-center text-xs text-purple-300/50">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <div className="flex justify-center space-x-4 text-purple-300/70">
            <button onClick={() => setLegalTab('termos')} className="hover:text-yellow-400 transition-colors">
              Termos de Uso
            </button>
            <span>&middot;</span>
            <button onClick={() => setLegalTab('privacidade')} className="hover:text-yellow-400 transition-colors">
              Política de Privacidade
            </button>
            <span>&middot;</span>
            <button onClick={() => setLegalTab('contato')} className="hover:text-yellow-400 transition-colors">
              Contacto
            </button>
          </div>
          <p>
            Copyright &copy; {new Date().getFullYear()} &middot; Códigos da Alma. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-purple-400/40 max-w-xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade da Meta Platforms Inc. Os resultados podem variar de acordo com o comprometimento individual.
          </p>
        </div>
      </footer>

      {/* Legal Modal */}
      {legalTab && (
        <LegalModal initialTab={legalTab} onClose={() => setLegalTab(null)} />
      )}
    </div>
  );
};

export default App;
