export interface Produtos {
    id?: number;
    nome: string;
    categoria: string;
    imagem1: string;
    imagem2: string;
    imagem3: string;
    valor: number;
    cor: string;
    tamanho: string[];
    disponivel: boolean;

} 
export interface Usuarios {
    id?: number;
    email: string;
    senha: string;
}  

export interface Categorias {
    id: number;
    nome: string;
}  