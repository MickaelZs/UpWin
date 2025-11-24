import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Usuarios } from '../../services/types/type';
import { UsuariosService } from '../../services/usuarios';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [RouterModule, FormsModule],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.css'
})
export class CadastroUsuario {

  usuario: Usuarios = {} as Usuarios;
  confirmarSenha: string = '';

  constructor(
    private service: UsuariosService,
    private router: Router,
    private route: ActivatedRoute) { }

  submeter() {
  
  if (!this.usuario.email || !this.usuario.senha || !this.confirmarSenha) {
    alert("Preencha todos os campos.");
    return;
  }
  
  //essa validação eu pedi ajuda pra IA porque eu não sabia a forma correta de fazer
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.usuario.email);

  if (!emailValido) {
    alert("Digite um email válido.");
    return;
  }

 
  if (this.usuario.senha.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres.");
    return;
  }


  if (this.usuario.senha !== this.confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  
  if (usuarios.some((u: any) => u.email === this.usuario.email)) {
    alert("Este email já está cadastrado.");
    return;
  }

  
  this.usuario.id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1;

  
  usuarios.push(this.usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));


  localStorage.setItem("usuarioLogado", JSON.stringify(this.usuario));

  alert("Cadastro realizado com sucesso!");
  this.router.navigate([""]);
}
}
