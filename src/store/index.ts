import { createStore } from 'redux';

 /*interface dataDPMCDA {
  name: string;
  penalCode: {
    id: number
    nome: string
    descricao: string
    dataCriacao: Date
    multa: number
    tempoPrisao: number
    status: number
  };
}*/

function reducer() {
  return [{
    "id": 1,
    "nome": "Desacato",
    "descricao": "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    "dataCriacao": "2021-04-29T01:26:35.700Z",
    "multa": 501.2,
    "tempoPrisao": 30,
    "status": 1
  },
  {
    "id": 2,
    "nome": "Dinheiro Ilícito",
    "descricao": "Estar em posse de dinheiro não declarado ou de natureza ilícita sem procedência. Agrava-se penalmente em 1 mês a cada R$1.000.",
    "dataCriacao": "2021-04-29T01:26:35.700Z",
    "multa": 1000,
    "tempoPrisao": 10,
    "status": 1
  },
  {
    "id": 3,
    "nome": "Falsa Identidade",
    "descricao": "Se passar por um advogado certificado ou funcionário do governo (incluindo policiais, membros do Departamento de Justiça, etc.)",
    "dataCriacao": "2021-04-29T01:26:35.700Z",
    "multa": 0,
    "tempoPrisao": 90,
    "status": 2
  },
  {
    "id": 4,
    "nome": "Desacato",
    "descricao": "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    "dataCriacao": "2021-04-29T01:26:35.700Z",
    "multa": 501.2,
    "tempoPrisao": 30,
    "status": 1
  },
  {
    "id": 5,
    "nome": "Desacato",
    "descricao": "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    "dataCriacao": "2021-04-29T01:26:35.700Z",
    "multa": 501.2,
    "tempoPrisao": 30,
    "status": 1
  },
  {
    "id": 6,
    "nome": "Desacato",
    "descricao": "Desacato, desobediência ou desrespeito perante um tribunal ou oficiais da policia na forma de comportamento que se opõe ou desafia a autoridade, a justiça e a dignidade do tribunal. Um réu só pode ser cobrado uma vez por desacato",
    "dataCriacao": "2021-04-29T01:26:35.700Z",
    "multa": 501.2,
    "tempoPrisao": 30,
    "status": 1
  },
]
}
const store = createStore(reducer);

export default store;