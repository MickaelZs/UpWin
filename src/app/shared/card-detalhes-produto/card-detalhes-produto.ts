import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProdutosService } from '../../services/produtos';
import { Produtos } from '../../services/types/type';

@Component({
  selector: 'app-card-detalhes-produto',
  imports: [CommonModule],
  templateUrl: './card-detalhes-produto.html',
  styleUrls: ['./card-detalhes-produto.css']
})
export class CardDetalhesProduto {

  produto: Produtos = {} as Produtos;
  produtoId?: number;
  imagemPrincipal: string = '';
  miniaturas: string[] = [];

  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    private modal: MatDialog,
    private cdr: ChangeDetectorRef

  ) {

    this.produtoId = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params)
    console.log(this.produtoId)
    if (this.produtoId) {
      service.buscarPorId(this.produtoId).subscribe(produto => {
       if (produto) {
    this.produto = produto;

    this.miniaturas = [
      produto.imagem1,
      produto.imagem2,
      produto.imagem3
    ].filter(img => !!img);

    this.imagemPrincipal = this.miniaturas[0];

    this.cdr.detectChanges();
  }
      })
    }
 
  }


  trocarImagemPrincipal(imagemSelecionada: string): void {
  console.log("Imagem clicada:", imagemSelecionada);
  this.imagemPrincipal = imagemSelecionada;
  console.log("Imagem principal AGORA:", this.imagemPrincipal);
  this.cdr.detectChanges();
}


}
