import React, { useState } from 'react';
import { UserQuizData, Gender, CivilStatus } from '../types';
import { ChevronLeft, ArrowRight, Calendar, Clock, MapPin, Heart, User, CheckCircle } from 'lucide-react';

interface QuizStepProps {
  onComplete: (data: UserQuizData) => void;
}

const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export const QuizStep: React.FC<QuizStepProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(1);
  const totalSteps = 8;

  const [formData, setFormData] = useState<UserQuizData>({
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

  const [inputError, setInputError] = useState<string>('');

  const handleNext = () => {
    setInputError('');
    if (step === 8) {
      if (!formData.fullName.trim() || formData.fullName.trim().split(' ').length < 2) {
        setInputError('Por favor, informe seu nome e sobrenome completo para o cálculo.');
        return;
      }
      onComplete(formData);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setInputError('');
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const progress = Math.round((step / totalSteps) * 100);

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center text-xs text-purple-300/80 mb-2 font-medium">
          <span>Etapa {step} de {totalSteps}</span>
          <span className="text-yellow-400 font-bold">{progress}% Concluído</span>
        </div>
        <div className="w-full h-2.5 bg-purple-950/80 rounded-full overflow-hidden border border-purple-800/40 p-0.5">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-amber-400 to-yellow-400 rounded-full transition-all duration-500 shadow-sm shadow-yellow-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="astro-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {step > 1 && (
          <button 
            onClick={handleBack}
            className="inline-flex items-center text-xs text-purple-300/70 hover:text-yellow-400 transition-colors mb-4 group"
          >
            <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-0.5 transition-transform" />
            Voltar
          </button>
        )}

        {/* STEP 1: Gênero */}
        {step === 1 && (
          <div className="text-center animate-fadeIn">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-yellow-100 mb-3">
              Qual é o seu gênero?
            </h2>
            <p className="text-purple-200/70 text-sm mb-8">
              A energia arquetípica inicial orienta as vibrações primárias do seu mapa.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, gender: 'feminino' }));
                  setStep(2);
                }}
                className={`p-6 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 group ${
                  formData.gender === 'feminino'
                    ? 'border-yellow-400 bg-purple-800/40 astro-glow'
                    : 'border-purple-800/50 hover:border-yellow-500/60 bg-purple-950/40 hover:bg-purple-900/40'
                }`}
              >
                <div className="w-20 h-20 mb-3 rounded-full overflow-hidden border-2 border-yellow-500/40 group-hover:scale-105 transition-transform">
                  <img src="/img/female.a214dfbb.png" alt="Feminino" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-yellow-100 text-lg">Feminino</span>
              </button>

              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, gender: 'masculino' }));
                  setStep(2);
                }}
                className={`p-6 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 group ${
                  formData.gender === 'masculino'
                    ? 'border-yellow-400 bg-purple-800/40 astro-glow'
                    : 'border-purple-800/50 hover:border-yellow-500/60 bg-purple-950/40 hover:bg-purple-900/40'
                }`}
              >
                <div className="w-20 h-20 mb-3 rounded-full overflow-hidden border-2 border-yellow-500/40 group-hover:scale-105 transition-transform">
                  <img src="/img/masculine.b27a3766.png" alt="Masculino" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-yellow-100 text-lg">Masculino</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Dia de Nascimento */}
        {step === 2 && (
          <div className="text-center">
            <Calendar className="w-10 h-10 text-yellow-400 mx-auto mb-3 opacity-90" />
            <h2 className="font-serif text-2xl font-bold text-yellow-100 mb-2">
              Em que dia você nasceu?
            </h2>
            <p className="text-purple-200/70 text-xs md:text-sm mb-6">
              O dia de nascimento define seu dom nato e talentos de ação.
            </p>

            <div className="grid grid-cols-6 sm:grid-cols-7 gap-2 max-h-60 overflow-y-auto p-2 bg-purple-950/40 rounded-xl border border-purple-900/50">
              {Array.from({ length: 31 }, (_, i) => String(i + 1)).map(dia => (
                <button
                  key={dia}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, day: dia }));
                    setStep(3);
                  }}
                  className={`py-3 rounded-lg text-sm font-semibold transition-all ${
                    formData.day === dia
                      ? 'bg-yellow-500 text-slate-950 font-bold shadow-md shadow-yellow-500/40 scale-105'
                      : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/60 hover:text-white'
                  }`}
                >
                  {dia}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Mês de Nascimento */}
        {step === 3 && (
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-yellow-100 mb-2">
              Qual é o mês do seu nascimento?
            </h2>
            <p className="text-purple-200/70 text-xs md:text-sm mb-6">
              O mês rege a vibração do seu ciclo de aprendizados emocionais.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {meses.map((mes, idx) => {
                const mesNum = String(idx + 1);
                return (
                  <button
                    key={mes}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, month: mesNum }));
                      setStep(4);
                    }}
                    className={`py-3 px-2 rounded-xl text-sm font-medium transition-all ${
                      formData.month === mesNum
                        ? 'bg-yellow-500 text-slate-950 font-bold shadow-md shadow-yellow-500/40'
                        : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/60 hover:text-white border border-purple-800/40'
                    }`}
                  >
                    {mes}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Ano de Nascimento */}
        {step === 4 && (
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-yellow-100 mb-2">
              Em qual ano você nasceu?
            </h2>
            <p className="text-purple-200/70 text-xs md:text-sm mb-6">
              O ano revela as lições cármicas e a missão geracional da sua alma.
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-64 overflow-y-auto p-2 bg-purple-950/40 rounded-xl border border-purple-900/50">
              {Array.from({ length: 80 }, (_, i) => String(2010 - i)).map(ano => (
                <button
                  key={ano}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, year: ano }));
                    setStep(5);
                  }}
                  className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    formData.year === ano
                      ? 'bg-yellow-500 text-slate-950 font-bold shadow-md shadow-yellow-500/40 scale-105'
                      : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/60 hover:text-white'
                  }`}
                >
                  {ano}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: Horário de Nascimento */}
        {step === 5 && (
          <div className="text-center">
            <Clock className="w-10 h-10 text-yellow-400 mx-auto mb-3 opacity-90" />
            <h2 className="font-serif text-2xl font-bold text-yellow-100 mb-2">
              Você sabe o horário do seu nascimento?
            </h2>
            <p className="text-purple-200/70 text-xs md:text-sm mb-6">
              O horário exato ajusta os alinhamentos dos trânsitos cósmicos.
            </p>

            <div className="flex justify-center items-center gap-3 mb-6">
              <div>
                <label className="block text-xs text-purple-300 mb-1">Hora</label>
                <select
                  value={formData.hour}
                  onChange={e => setFormData(prev => ({ ...prev, hour: e.target.value }))}
                  className="bg-purple-950 border border-purple-700/60 rounded-xl px-4 py-3 text-yellow-100 font-bold text-lg focus:outline-none focus:border-yellow-400"
                >
                  {Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0')).map(h => (
                    <option key={h} value={h}>{h}h</option>
                  ))}
                </select>
              </div>

              <span className="text-2xl font-bold text-yellow-400 self-end pb-2">:</span>

              <div>
                <label className="block text-xs text-purple-300 mb-1">Minutos</label>
                <select
                  value={formData.minute}
                  onChange={e => setFormData(prev => ({ ...prev, minute: e.target.value }))}
                  className="bg-purple-950 border border-purple-700/60 rounded-xl px-4 py-3 text-yellow-100 font-bold text-lg focus:outline-none focus:border-yellow-400"
                >
                  {['00', '15', '30', '45'].map(m => (
                    <option key={m} value={m}>{m}m</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setStep(6)}
                className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-yellow-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>Confirmar Horário</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, hour: '12', minute: '00' }));
                  setStep(6);
                }}
                className="text-xs text-purple-300/70 hover:text-yellow-400 py-2 transition-colors"
              >
                Não sei o horário exato (usar horário padrão das 12:00)
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: Cidade / Local de Nascimento */}
        {step === 6 && (
          <div className="text-center">
            <MapPin className="w-10 h-10 text-yellow-400 mx-auto mb-3 opacity-90" />
            <h2 className="font-serif text-2xl font-bold text-yellow-100 mb-2">
              Em qual cidade ou país você nasceu?
            </h2>
            <p className="text-purple-200/70 text-xs md:text-sm mb-6">
              As coordenadas geográficas calibram a influência eletromagnética do mapa.
            </p>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Ex: São Paulo, Lisboa, Rio de Janeiro..."
                value={formData.city}
                onChange={e => setFormData(prev => ({ ...prev, city: e.target.value }))}
                className="w-full bg-purple-950/80 border border-purple-700/60 rounded-xl px-4 py-3.5 text-yellow-100 placeholder-purple-400/50 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-center font-medium"
              />
            </div>

            <button
              onClick={() => setStep(7)}
              className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-yellow-500/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Continuar</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* STEP 7: Estado Civil */}
        {step === 7 && (
          <div className="text-center">
            <Heart className="w-10 h-10 text-yellow-400 mx-auto mb-3 opacity-90" />
            <h2 className="font-serif text-2xl font-bold text-yellow-100 mb-2">
              Qual é o seu estado civil atual?
            </h2>
            <p className="text-purple-200/70 text-xs md:text-sm mb-6">
              Identifica a polaridade de relacionamentos e desafios afetivos.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { id: 'solteiro', label: 'Solteiro(a)' },
                { id: 'namorando', label: 'Namorando' },
                { id: 'noivo', label: 'Noivo(a)' },
                { id: 'casado', label: 'Casado(a)' },
                { id: 'divorciado', label: 'Divorciado(a)' },
                { id: 'viuvo', label: 'Viúvo(a)' }
              ].map(st => (
                <button
                  key={st.id}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, civilStatus: st.id as CivilStatus }));
                    setStep(8);
                  }}
                  className={`p-4 rounded-xl border text-sm font-semibold transition-all ${
                    formData.civilStatus === st.id
                      ? 'border-yellow-400 bg-purple-800/40 text-yellow-200 astro-glow'
                      : 'border-purple-800/40 bg-purple-950/40 hover:bg-purple-900/40 text-purple-200 hover:border-yellow-500/40'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 8: Nome Completo */}
        {step === 8 && (
          <div className="text-center">
            <User className="w-10 h-10 text-yellow-400 mx-auto mb-3 opacity-90" />
            <h2 className="font-serif text-2xl font-bold text-yellow-100 mb-2">
              Qual é o seu nome completo de certidão?
            </h2>
            <p className="text-purple-200/70 text-xs md:text-sm mb-6">
              Na Cabala sagrada, cada letra possui um valor numérico que decodifica o Número da sua Alma e sua Expressão Terrena.
            </p>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Digite seu nome e sobrenome completo..."
                value={formData.fullName}
                onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className="w-full bg-purple-950/80 border border-purple-700/60 rounded-xl px-4 py-3.5 text-yellow-100 placeholder-purple-400/50 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-center font-medium text-lg"
              />
              {inputError && (
                <p className="text-red-400 text-xs mt-2 font-medium">{inputError}</p>
              )}
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 hover:from-yellow-400 hover:to-amber-300 text-slate-950 font-black text-base md:text-lg rounded-xl shadow-xl shadow-yellow-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Gerar Meu Mapa Numerológico</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
