export interface Produto {
  id?: string
  nome: string
  preco: number
  descricao: string
  estoque: number
  importado: 0 | 1
}
