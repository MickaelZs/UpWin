import { ChangeDetectorRef, Component } from '@angular/core';
import { Produtos } from '../../services/types/type';
import { ProdutosService } from '../../services/produtos';
import Toastify from 'toastify-js';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Modal } from '../modal/modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-produtos',
  imports: [FormsModule],
  templateUrl: './form-produtos.html',
  styleUrl: './form-produtos.css'
})
export class FormProdutos {

  produto: Produtos = {} as Produtos;
  produtoId?: number;

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
          this.cdr.detectChanges();
        }
      })
    }

   }

  submeter() {

    if(this.produtoId){
      this.service.editar(this.produto).subscribe(() => {
        Toastify({
        text: "Produto alterado com sucesso!",
        duration: 3000,        
        close: true,           
        gravity: "top",       
        position: "right",     
        stopOnFocus: true,     
        style: {
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(135deg, #21c800ff, #1df700ff)",
          color: "#fff",
          fontWeight: "400",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
          padding: "14px 20px",
          fontSize: "15px",
          textTransform: "capitalize",
        }
      }).showToast();
        
      } )
    }
    else{
       if (
      !this.produto.nome || !this.produto.categoria || !this.produto.cor || !this.produto.disponivel || !this.produto.valor || !this.produto.tamanho || !this.produto.imagem1 || !this.produto.imagem2 || !this.produto.imagem3
    ) {
      Toastify({
        text: "Campos obrigatórios não preenchidos!",
        duration: 3000,        
        close: true,         
        gravity: "top",        
        position: "right",     
        stopOnFocus: true,     
        style: {
          fontFamily: "'Poppins', sans-serif",
          color: "#fff",
          fontWeight: "400",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
          padding: "14px 20px",
          fontSize: "15px",
          textTransform: "capitalize",
          
        }
      }).showToast();
      return;
    }
    this.service.cadastrar(this.produto).subscribe(() => {
      Toastify({
        text: "Produto salvo com sucesso!",
        duration: 3000,        
        close: true,           
        gravity: "top",       
        position: "right",     
        stopOnFocus: true,     
        style: {
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(135deg, #21c800ff, #1df700ff)",
          color: "#fff",
          fontWeight: "400",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
          padding: "14px 20px",
          fontSize: "15px",
          textTransform: "capitalize",
        }
      }).showToast();
    });


  }

    }

    


  onFileSelected(event: any, index: number) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const imageDataUrl = e.target.result;

        switch (index) {
          case 1:
            this.produto.imagem1 = imageDataUrl;
            break;
          case 2:
            this.produto.imagem2 = imageDataUrl;
            break;
          case 3:
            this.produto.imagem3 = imageDataUrl;
            break;
          default:
            console.error('Índice de imagem inválido.');
        }

      };

      reader.readAsDataURL(file);
    }
  }

}
