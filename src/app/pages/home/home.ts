import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { CardCategoria } from "../../shared/card-categoria/card-categoria";
import { CardProdutos } from "../../shared/card-produtos/card-produtos";
import { CardBeneficio } from "../../shared/card-beneficio/card-beneficio";
import { HeaderAdmin } from "../../shared/header-admin/header-admin";
import { CardCamisaTime } from "../../shared/card-camisa-time/card-camisa-time";
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-home',
  imports: [CardCategoria, CardProdutos, CardBeneficio, CardCamisaTime, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  

}
