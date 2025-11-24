import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Usuarios } from '../../services/types/type';
import { UsuariosService } from '../../services/usuarios';
import { log } from 'console';

@Component({
  selector: 'app-login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  titulo = 'Faça seu Login!'
  login = ''
  senha = ''
  botaoDesabilitado: boolean = true;

  constructor(
    private router: Router,
    private service: UsuariosService
  ) { }

onBotaoClicado() {
  if (!this.login || !this.senha) {
    alert("Preencha email e senha.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  const usuarioEncontrado = usuarios.find((u: any) =>
    u.email === this.login && u.senha === this.senha
  );

  if (!usuarioEncontrado) {
    alert("Usuário não encontrado. Cadastre-se.");

    this.login = "";
    this.senha = "";

    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
  this.router.navigate([""]);
}

}

