import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { CardDetalhesProduto } from '../../shared/card-detalhes-produto/card-detalhes-produto';

@Component({
  selector: 'app-detalhes-produtos',
  imports: [CardDetalhesProduto, Header],
  templateUrl: './detalhes-produtos.html',
  styleUrl: './detalhes-produtos.css'
})
export class DetalhesProdutos {

}
 