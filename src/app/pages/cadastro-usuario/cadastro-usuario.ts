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
    if (this.usuario.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    this.service.cadastrar(this.usuario).subscribe(() => {
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/login']);
    });
  }

}
