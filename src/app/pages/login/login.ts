import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Usuarios } from '../../services/types/type';
import { UsuariosService } from '../../services/usuarios';

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

    const loginTrim = this.login.trim();
    const senhaTrim = this.senha.trim();

    if (loginTrim === 'admin' && senhaTrim === '123') {
      this.router.navigate(['/admin/home']);
      return;
    }

    if (loginTrim !== '' && senhaTrim !== '') {
      this.service.listar().subscribe({
        next: (usuarios: Usuarios[]) => {
          const usuarioValido = usuarios.find(u => u.email === loginTrim && u.senha === senhaTrim);

          if (usuarioValido) {
            alert(`Bem-vindo ${loginTrim}!`);
            this.router.navigate(['']);
          } else {
            alert('Email ou senha inválidos.');
          }
        },
        error: (erro) => {
          console.error('Erro ao buscar usuários:', erro);
          alert('Erro ao conectar com o servidor.');
        }
      });

    } else {
      alert('Preencha ambos os campos!');
    }
  }
}
