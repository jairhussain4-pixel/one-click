export type Gender = 'masculino' | 'feminino';

export type CivilStatus = 'solteiro' | 'namorando' | 'noivo' | 'casado' | 'divorciado' | 'viuvo';

export interface UserQuizData {
  gender: Gender | null;
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  city: string;
  civilStatus: CivilStatus | null;
  fullName: string;
}

export interface NumerologyResults {
  numeroAlma: number;
  numeroExpressao: number;
  numeroDestino: number;
  signo: string;
}
