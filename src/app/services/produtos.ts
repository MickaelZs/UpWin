import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from './types/type';
import { Categorias } from './types/type';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'http://localhost:3000/produtos';
  private readonly API_CATEGORIAS = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) {
  }

  listar(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.API);
  }

  cadastrar(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(this.API, produto);
  }

  editar(produto: Produtos): Observable<Produtos> {
    const url = `${this.API}/${produto.id}`
    return this.http.put<Produtos>(url, produto)
  }

   excluir(id: number): Observable<Produtos> {
    return this.http.delete<Produtos>(this.API + `/${id}`);
  }

  buscarPorId(id: number): Observable<Produtos | undefined> {
    return this.http.get<Produtos>(this.API + `/${id}`);
  }

    // Buscar produtos por categoria
  buscarPorCategoria(nomeCategoria: string): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${this.API}?categoria=${nomeCategoria}`);
  }

  // Listar todas categorias
  listarCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(this.API_CATEGORIAS);
  }
}