/// <reference types="react-scripts" />

export interface Code {
  id: number | string
  nome: string
  descricao: string
  multa: any
  tempoPrisao: any
  status: number
  dataCriacao: string
}

export interface Credentials {
  user: string;
  password: string;
}
