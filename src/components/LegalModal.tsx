import React, { useState } from 'react';
import { X, Mail, Clock, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  initialTab?: 'termos' | 'privacidade' | 'contato';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ initialTab = 'termos', onClose }) => {
  const [activeTab, setActiveTab] = useState<'termos' | 'privacidade' | 'contato'>(initialTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-purple-800/80 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-800/40">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('termos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'termos' ? 'bg-yellow-500 text-slate-950 font-bold' : 'text-purple-300 hover:text-white'
              }`}
            >
              Termos de Uso
            </button>
            <button
              onClick={() => setActiveTab('privacidade')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'privacidade' ? 'bg-yellow-500 text-slate-950 font-bold' : 'text-purple-300 hover:text-white'
              }`}
            >
              Privacidade
            </button>
            <button
              onClick={() => setActiveTab('contato')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'contato' ? 'bg-yellow-500 text-slate-950 font-bold' : 'text-purple-300 hover:text-white'
              }`}
            >
              Contato
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-800/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-sm leading-relaxed text-slate-300 space-y-4">
          {activeTab === 'termos' && (
            <div>
              <h3 className="font-serif text-xl font-bold text-yellow-100 mb-3 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-yellow-400" />
                <span>Termos de Uso</span>
              </h3>
              <p>
                Ao acessar e utilizar este serviço, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. O material fornecido tem caráter exclusivamente educativo, cultural e de autoconhecimento.
              </p>
              <p>
                Nenhuma informação contida neste site ou nos relatórios substitui aconselhamento médico, psicológico, jurídico ou financeiro profissional.
              </p>
              <h4 className="font-bold text-yellow-200 mt-4 mb-1">Garantia e Reembolso</h4>
              <p>
                Oferecemos garantia incondicional de 7 dias a contar da data de aquisição do produto digital. Caso não fique satisfeito, basta solicitar o reembolso através do nosso canal de suporte.
              </p>
            </div>
          )}

          {activeTab === 'privacidade' && (
            <div>
              <h3 className="font-serif text-xl font-bold text-yellow-100 mb-3 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span>Política de Privacidade</span>
              </h3>
              <p>
                Valorizamos e respeitamos a sua privacidade. Os dados informados no questionário (como nome e data de nascimento) são utilizados exclusivamente para o cálculo matemático dos números e geração do relatório solicitado.
              </p>
              <p>
                Não comercializamos, alugamos ou compartilhamos seus dados pessoais com terceiros não autorizados. Utilizamos protocolos de segurança padrão SSL/TLS para garantir a integridade dos dados durante a navegação.
              </p>
            </div>
          )}

          {activeTab === 'contato' && (
            <div>
              <h3 className="font-serif text-xl font-bold text-yellow-100 mb-3 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>Canal de Atendimento</span>
              </h3>
              <p>
                Estamos prontos para atender você em caso de dúvidas sobre seu pedido ou acesso aos materiais:
              </p>
              <div className="p-4 bg-purple-950/60 rounded-xl border border-purple-800/40 my-3 space-y-2">
                <div className="flex items-center space-x-2 text-yellow-200 font-semibold">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span>suporte@codigosdaalma.online</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-300 text-xs">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>Segunda a Sexta, das 09h às 18h</span>
                </div>
              </div>
              <p className="text-xs text-purple-300/60">
                Tempo médio de resposta: até 24 horas úteis.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-purple-800/40 text-right bg-slate-950/40">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-purple-900/60 hover:bg-purple-800 text-purple-200 text-xs font-semibold rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
