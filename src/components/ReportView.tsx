import React, { useState } from 'react';
import { NumerologyResults, UserQuizData } from '../types';
import { interpretacoesNumeros } from '../data/numerology';
import { BookOpen, Download, ExternalLink, Sparkles, Star, Award, ShieldAlert, Video } from 'lucide-react';

interface ReportViewProps {
  quizData: UserQuizData;
  results: NumerologyResults;
  onGoToVideo: () => void;
}

export const ReportView: React.FC<ReportViewProps> = ({ quizData, results, onGoToVideo }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 11;

  const almaInfo = interpretacoesNumeros[results.numeroAlma] || interpretacoesNumeros[1];
  const expressaoInfo = interpretacoesNumeros[results.numeroExpressao] || interpretacoesNumeros[3];
  const destinoInfo = interpretacoesNumeros[results.numeroDestino] || interpretacoesNumeros[7];

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      {/* Top Banner: Core Numbers Overview */}
      <div className="astro-card rounded-2xl p-6 md:p-8 mb-8 border border-yellow-500/40 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-semibold mb-3 border border-yellow-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mapa Revelado com Sucesso</span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-yellow-100 mb-2">
              Mapa de {quizData.fullName || 'Consultante'}
            </h1>
            <p className="text-purple-200/70 text-sm">
              Nascido(a) em {quizData.day}/{quizData.month}/{quizData.year} &middot; Signo de {results.signo}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onGoToVideo}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold text-sm flex items-center space-x-2 shadow-lg shadow-yellow-500/20 transition-all"
            >
              <Video className="w-4 h-4" />
              <span>Assistir Revelação em Vídeo</span>
            </button>
          </div>
        </div>

        {/* 3 Numbers Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-purple-800/40">
          <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-700/40 text-center">
            <span className="text-xs uppercase tracking-wider text-purple-300 font-medium block mb-1">
              Número da Alma
            </span>
            <div className="text-3xl font-black font-serif text-yellow-400 mb-1">
              {results.numeroAlma}
            </div>
            <div className="text-xs text-yellow-100/90 font-medium">{almaInfo.titulo}</div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-700/40 text-center">
            <span className="text-xs uppercase tracking-wider text-purple-300 font-medium block mb-1">
              Número de Expressão
            </span>
            <div className="text-3xl font-black font-serif text-yellow-400 mb-1">
              {results.numeroExpressao}
            </div>
            <div className="text-xs text-yellow-100/90 font-medium">{expressaoInfo.titulo}</div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-700/40 text-center">
            <span className="text-xs uppercase tracking-wider text-purple-300 font-medium block mb-1">
              Caminho de Destino
            </span>
            <div className="text-3xl font-black font-serif text-yellow-400 mb-1">
              {results.numeroDestino}
            </div>
            <div className="text-xs text-yellow-100/90 font-medium">{destinoInfo.titulo}</div>
          </div>
        </div>
      </div>

      {/* Bonus Box (Google Drive link from original site) */}
      <div className="rounded-2xl p-6 mb-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-2 border-yellow-500/60 shadow-xl shadow-yellow-500/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-yellow-400 font-bold text-sm mb-1">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>3 Livros Bônus Oficiais Liberados!</span>
            </div>
            <p className="text-purple-200/80 text-xs md:text-sm">
              Acesse agora o <em>Dossiê dos Trânsitos Proibidos</em>, <em>Escudo do Sol Cabalístico</em> e o <em>Ritual da Mão Esquerda</em>.
            </p>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1hUkkNHoQ9EBl0ZnZd58dGmeEo1uaXx3C?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/40 transition-all shrink-0"
          >
            <span>Descarregar os Bônus</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Page Navigation Tabs */}
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-xs text-purple-300 font-medium">
          Capítulo {currentPage} de {totalPages}
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-lg bg-purple-900/40 text-purple-200 text-xs font-semibold disabled:opacity-40 hover:bg-purple-800/50 transition-colors"
          >
            Anterior
          </button>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded-lg bg-yellow-500 text-slate-950 text-xs font-bold disabled:opacity-40 hover:bg-yellow-400 transition-colors"
          >
            Próximo
          </button>
        </div>
      </div>

      {/* Main Report Reader Card */}
      <div className="bg-white text-slate-900 rounded-2xl p-6 md:p-10 shadow-2xl mb-8 leading-relaxed">
        {/* Page 1 */}
        {currentPage === 1 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/capa_mapa_numerologico.cd74eded.jpg" alt="Mapa Numerológico" className="w-full h-auto" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-purple-950 text-center mb-4">
              Seja Bem-Vindo(a) à Sua Jornada Cósmica!
            </h2>
            <p className="text-slate-700 mb-4 text-base">
              Olá, <strong>{quizData.fullName}</strong>. Os números que acompanham o seu nascimento e o seu nome não são meras coincidências estatísticas. Na tradição cabalística milenar, cada vibração é um código de ativação da sua consciência terrena.
            </p>
            <p className="text-slate-700 mb-6 text-base">
              Este relatório completo foi gerado a partir do cruzamento exato das suas coordenadas de nascimento e das letras do seu nome de batismo. Nas próximas páginas, você terá acesso a um diagnóstico profundo de quem você é e do caminho que está diante de você.
            </p>
            
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 mb-6">
              <h3 className="font-bold text-purple-900 mb-2 flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-600 fill-current" />
                <span>Os Tesouros que Você Encontrará</span>
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm">
                <li>A verdadeira motivação oculta da sua alma (Número {results.numeroAlma})</li>
                <li>A imagem e magnetismo que você projeta no mundo (Número {results.numeroExpressao})</li>
                <li>Sua grande missão de vida e destino (Número {results.numeroDestino})</li>
                <li>Os pontos cegos kármicos que podem estar travando sua prosperidade</li>
              </ul>
            </div>
          </div>
        )}

        {/* Page 2: História da Numerologia */}
        {currentPage === 2 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/babilonia_egito.0e6d95bb.png" alt="Babilônia e Egito" className="w-full h-auto" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-purple-950 mb-3 text-center">
              A Breve História da Numerologia Sagrada
            </h2>
            <p className="text-slate-700 mb-4">
              Desde a Babilônia antiga, passando pelo Egito dos faraós e pelos templos de Pitágoras na Grécia, os números foram estudados não como quantidades abstratas, mas como princípios vivos que constroem a matéria.
            </p>
            <p className="text-slate-700 mb-4">
              Pitágoras afirmava: <em>"Todas as coisas são números."</em> Quando conhecemos a frequência vibracional que nos rege, paramos de nadar contra a correnteza e passamos a manifestar nossos desejos com naturalidade.
            </p>
          </div>
        )}

        {/* Page 3: Como ler o Mapa */}
        {currentPage === 3 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/interpretacao_mapa.b636572c.png" alt="Interpretação do Mapa" className="w-full h-auto" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-purple-950 mb-3 text-center">
              Como Ler e Interpretar o Seu Mapa
            </h2>
            <p className="text-slate-700 mb-4">
              O mapa não é uma sentença fechada, mas sim a planta arquitetônica da sua alma. Você possui livre-arbítrio para vivenciar os números em sua frequência mais alta (luz) ou em sua frequência mais baixa (sombra).
            </p>
            <p className="text-slate-700 mb-4">
              Ao tomar consciência dos seus números dominantes, você ganha clareza imediata sobre quais decisões tomar na carreira, nas finanças e na vida amorosa.
            </p>
          </div>
        )}

        {/* Page 4: Desvendando seus Números */}
        {currentPage === 4 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/poder_numeros_universo.1094b7d5.png" alt="Poder dos Números" className="w-full h-auto" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-purple-950 mb-3 text-center">
              Desvendando os Segredos dos Seus Números Sagrados
            </h2>
            <p className="text-slate-700 mb-4">
              A sua assinatura energética é composta por 3 pilares primordiais que governam o seu subconsciente, suas relações e seus resultados práticos no mundo material.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 text-center">
                <span className="font-bold text-purple-900 block text-lg mb-1">Alma: {results.numeroAlma}</span>
                <span className="text-xs text-slate-600">O que move seu coração por dentro</span>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 text-center">
                <span className="font-bold text-purple-900 block text-lg mb-1">Expressão: {results.numeroExpressao}</span>
                <span className="text-xs text-slate-600">Como o mundo enxerga seus talentos</span>
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 text-center">
                <span className="font-bold text-purple-900 block text-lg mb-1">Destino: {results.numeroDestino}</span>
                <span className="text-xs text-slate-600">O caminho que você veio trilhar</span>
              </div>
            </div>
          </div>
        )}

        {/* Page 5: Número da Alma */}
        {currentPage === 5 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/numero_alma.a30e2cea.png" alt="Número da Alma" className="w-full h-auto" />
            </div>
            <div className="text-center mb-6">
              <span className="px-3 py-1 bg-purple-100 text-purple-900 font-bold rounded-full text-xs">
                Seu Número da Alma
              </span>
              <h2 className="font-serif text-3xl font-bold text-purple-950 mt-2">
                Número {results.numeroAlma} — {almaInfo.titulo}
              </h2>
            </div>
            <p className="text-slate-700 mb-4 text-base leading-relaxed">
              Calculado a partir de todas as vogais presentes no seu nome completo, o Número da Alma representa seus desejos mais íntimos, seus ideais silenciosos e aquilo que você realmente precisa para sentir paz interior.
            </p>
            <p className="text-slate-700 mb-6 font-medium text-purple-950">
              "{almaInfo.resumo}"
            </p>
            <div className="bg-yellow-50/80 p-5 rounded-xl border border-yellow-200">
              <h4 className="font-bold text-yellow-900 mb-2">Principais Virtudes da sua Alma:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-800">
                {almaInfo.caracteristicas.map((c, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-600" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Page 6: Número de Expressão */}
        {currentPage === 6 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/numero_expressao.f493d9d3.png" alt="Número de Expressão" className="w-full h-auto" />
            </div>
            <div className="text-center mb-6">
              <span className="px-3 py-1 bg-purple-100 text-purple-900 font-bold rounded-full text-xs">
                Seu Número de Expressão
              </span>
              <h2 className="font-serif text-3xl font-bold text-purple-950 mt-2">
                Número {results.numeroExpressao} — {expressaoInfo.titulo}
              </h2>
            </div>
            <p className="text-slate-700 mb-4 text-base leading-relaxed">
              O Número de Expressão reflete como você interage com o ambiente exterior e como as outras pessoas sentem a sua presença. É o veículo prático que materializa os anseios da sua alma.
            </p>
            <p className="text-slate-700 mb-6 font-medium text-purple-950">
              "{expressaoInfo.resumo}"
            </p>
          </div>
        )}

        {/* Page 7: Caminho de Destino */}
        {currentPage === 7 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/numero_vida.abfd0967.png" alt="Número do Destino" className="w-full h-auto" />
            </div>
            <div className="text-center mb-6">
              <span className="px-3 py-1 bg-purple-100 text-purple-900 font-bold rounded-full text-xs">
                Seu Caminho de Destino
              </span>
              <h2 className="font-serif text-3xl font-bold text-purple-950 mt-2">
                Número {results.numeroDestino} — {destinoInfo.titulo}
              </h2>
            </div>
            <p className="text-slate-700 mb-4 text-base leading-relaxed">
              O Caminho de Destino é a trilha principal da sua encarnação. Ele mostra as oportunidades que o universo colocará repetidamente à sua frente para que você atinja o topo do seu potencial.
            </p>
            <p className="text-slate-700 mb-6 font-medium text-purple-950">
              "{destinoInfo.resumo}"
            </p>
          </div>
        )}

        {/* Page 8: Lições Kármicas e Desafios */}
        {currentPage === 8 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/numeros_desafio.c5cdbece.png" alt="Desafios Kármicos" className="w-full h-auto" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-purple-950 mb-3 text-center">
              Seus Desafios e Bloqueios Kármicos
            </h2>
            <p className="text-slate-700 mb-4">
              Cada ser humano carrega pontos cegos energéticos. Quando não conhecemos nossos desafios numéricos, podemos atrair os mesmos tipos de relacionamentos tóxicos ou oscilações financeiras recorrentes.
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl my-4 text-slate-800 text-sm">
              <ShieldAlert className="w-5 h-5 text-amber-600 mb-2" />
              <strong>Ponto de Atenção:</strong> Ao integrar a sabedoria dos seus números mestres, você rompe esses ciclos repetitivos e desbloqueia novos patamares de realização.
            </div>
          </div>
        )}

        {/* Page 9: Ciclos de Vida */}
        {currentPage === 9 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/evolucao_culturas.fffffb43.png" alt="Ciclos de Vida" className="w-full h-auto" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-purple-950 mb-3 text-center">
              Ciclos de Vida e Anos Pessoais
            </h2>
            <p className="text-slate-700 mb-4">
              A vida se desenrola em ciclos de 9 anos. Saber o ano pessoal em que você se encontra permite planejar novos começos, parcerias ou períodos de colheita financeira com máxima precisão.
            </p>
          </div>
        )}

        {/* Page 10: Harmonia e Relacionamentos */}
        {currentPage === 10 && (
          <div>
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/empolgacao_criacao.022d93c7.png" alt="Harmonia" className="w-full h-auto" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-purple-950 mb-3 text-center">
              Harmonia Relacional e Magnetismo Afetivo
            </h2>
            <p className="text-slate-700 mb-4">
              Sua compatibilidade com parceiros de negócios e relacionamentos amorosos responde diretamente ao alinhamento entre o seu Número da Alma e a expressão do parceiro.
            </p>
          </div>
        )}

        {/* Page 11: Conclusão */}
        {currentPage === 11 && (
          <div className="text-center py-4">
            <div className="max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
              <img src="/img/cartilha_xamanica.78b63184.png" alt="Cartilha Sagrada" className="w-full h-auto" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-purple-950 mb-3">
              O Seu Despertar Começa Agora
            </h2>
            <p className="text-slate-700 mb-6 max-w-lg mx-auto">
              Parabéns por concluir a leitura dos fundamentos do seu Mapa Numerológico Cabalístico. O conhecimento que você tem em mãos é o mapa do tesouro da sua própria existência.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleDownloadPDF}
                className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Salvar / Imprimir Este Relatório</span>
              </button>
              <button
                onClick={onGoToVideo}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center space-x-2 shadow-lg shadow-yellow-500/30 transition-all"
              >
                <Video className="w-4 h-4" />
                <span>Assistir Apresentação em Vídeo</span>
              </button>
            </div>
          </div>
        )}

        {/* Bottom Pagination Bar */}
        <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-200">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 disabled:opacity-30 transition-colors"
          >
            &larr; Página Anterior
          </button>
          <span className="text-xs font-bold text-purple-900">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="text-xs font-semibold text-purple-700 hover:text-purple-950 disabled:opacity-30 transition-colors"
          >
            Próxima Página &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
