// Tabela de Pitágoras / Cabala
const letraParaNumero: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};

const vogais = new Set(['A', 'E', 'I', 'O', 'U', 'Y']);

function reduzirNumero(num: number): number {
  if (num === 11 || num === 22) return num;
  while (num > 9) {
    num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    if (num === 11 || num === 22) break;
  }
  return num || 1;
}

export function calcularNumeroAlma(nome: string): number {
  const limpo = nome.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let soma = 0;
  for (const char of limpo) {
    if (vogais.has(char) && letraParaNumero[char]) {
      soma += letraParaNumero[char];
    }
  }
  return reduzirNumero(soma);
}

export function calcularNumeroExpressao(nome: string): number {
  const limpo = nome.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let soma = 0;
  for (const char of limpo) {
    if (letraParaNumero[char]) {
      soma += letraParaNumero[char];
    }
  }
  return reduzirNumero(soma);
}

export function calcularNumeroDestino(dia: string, mes: string, ano: string): number {
  const d = parseInt(dia, 10) || 1;
  const m = parseInt(mes, 10) || 1;
  const y = parseInt(ano, 10) || 1990;
  return reduzirNumero(d + m + y);
}

export function obterSigno(diaStr: string, mesStr: string): string {
  const dia = parseInt(diaStr, 10);
  const mes = parseInt(mesStr, 10);

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return 'Áries';
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return 'Touro';
  if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return 'Gêmeos';
  if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return 'Câncer';
  if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return 'Leão';
  if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return 'Virgem';
  if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return 'Libra';
  if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return 'Escorpião';
  if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return 'Sagitário';
  if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return 'Capricórnio';
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return 'Aquário';
  return 'Peixes';
}

export const interpretacoesNumeros: Record<number, { titulo: string; resumo: string; caracteristicas: string[] }> = {
  1: {
    titulo: "O Pioneiro e Criador",
    resumo: "Energia de liderança original, coragem para abrir novos caminhos e independência inabalável.",
    caracteristicas: ["Autonomia natural", "Força inovadora", "Determinação absoluta", "Capacidade de iniciativa"]
  },
  2: {
    titulo: "O Pacificador Intuitivo",
    resumo: "Poder de empatia, sensibilidade diplomática aguçada e profundo discernimento relacional.",
    caracteristicas: ["Intuição refinada", "Equilíbrio emocional", "Cooperação", "Lealdade espiritual"]
  },
  3: {
    titulo: "O Mago da Expressão",
    resumo: "Comunicação magnética, magnetismo social, criatividade sem limites e energia vibracional positiva.",
    caracteristicas: ["Poder de manifestação verbal", "Otimismo contagiante", "Talento criativo", "Carisma único"]
  },
  4: {
    titulo: "O Arquiteto da Matriz",
    resumo: "Construção de estruturas sólidas, persistência metódica e realização concreta nos planos materiais.",
    caracteristicas: ["Foco inabalável", "Segurança prática", "Lealdade aos princípios", "Disciplina transcendental"]
  },
  5: {
    titulo: "O Explorador Cósmico",
    resumo: "Sede de transformação, liberdade expansiva, adaptação veloz e quebra de padrões limitantes.",
    caracteristicas: ["Dinamismo infinito", "Visão progressista", "Versatilidade", "Abertura ao desconhecido"]
  },
  6: {
    titulo: "O Guardião da Harmonia",
    resumo: "Cura através do afeto, equilíbrio familiar, senso estético divino e responsabilidade sagrada.",
    caracteristicas: ["Amor incondicional", "Paz interior", "Espírito protetor", "Justiça equilibrada"]
  },
  7: {
    titulo: "O Místico e Sábio",
    resumo: "Conexão direta com verdades ocultas, análise metafísica profunda e espiritualidade refinada.",
    caracteristicas: ["Percepção invisível", "Sabedoria ancestral", "Busca pela verdade", "Frequência meditativa"]
  },
  8: {
    titulo: "O Senhor da Prosperidade",
    resumo: "Domínio das leis de causa e efeito, autoridade realizadora, abundância material e justiça cármica.",
    caracteristicas: ["Visão estratégica", "Poder de atração financeira", "Governança", "Resiliência titânica"]
  },
  9: {
    titulo: "O Humanitário Universal",
    resumo: "Amor altruísta sem fronteiras, finalização de ciclos antigos e elevação de consciência coletiva.",
    caracteristicas: ["Generosidade pura", "Sabedoria holística", "Compaixão", "Transcendência kármica"]
  },
  11: {
    titulo: "O Mestre Iluminador",
    resumo: "Número Mestre. Ponte entre dimensões, alta intuição profética e inspiração para multidões.",
    caracteristicas: ["Canalização intuitiva", "Visão espiritual pioneira", "Idealismo elevado", "Magnetismo etéreo"]
  },
  22: {
    titulo: "O Grande Construtor Universal",
    resumo: "Número Mestre. O poder de materializar utopias espirituais na realidade terrena para benefício de todos.",
    caracteristicas: ["Realização colossal", "Maturidade de alma", "Pragmatismo genial", "Legado duradouro"]
  }
};
