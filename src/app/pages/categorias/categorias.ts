import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Header } from "../../shared/header/header";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProdutosService } from '../../services/produtos';
import { Produtos } from '../../services/types/type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  imports: [Header, RouterModule, CommonModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {

   nomeCategoria!: string;
  produtos: Produtos[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  this.nomeCategoria = this.route.snapshot.paramMap.get('nome')!;
  this.produtosService.buscarPorCategoria(this.nomeCategoria)
 
    .subscribe(res => {
      this.produtos = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
}


}
