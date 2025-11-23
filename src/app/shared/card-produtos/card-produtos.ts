import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProdutosService } from '../../services/produtos';
import { Produtos } from '../../services/types/type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-produtos',
  imports: [RouterModule,CommonModule],
  templateUrl: './card-produtos.html',
  styleUrl: './card-produtos.css'
})
export class CardProdutos implements OnInit {


  listaProdutos: Produtos[] = [];
    constructor(
      private service: ProdutosService,
      private router: Router,
      private cdr: ChangeDetectorRef
    ) { }
  
    ngOnInit(): void {
      this.service.listar().subscribe({
        next: (produtos) => {
          this.listaProdutos = produtos;
          this.cdr.detectChanges();
        }
      });
    }

    trackById(index: number, produto: Produtos): string {
        return produto.id ? produto.id.toString() : index.toString();
      }
    

}
