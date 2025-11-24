import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/admin/cadastro/cadastro';
import { Lista } from './pages/admin/lista/lista';
import { DetalhesProdutos } from './pages/detalhes-produtos/detalhes-produtos';
import { CadastroUsuario } from './pages/cadastro-usuario/cadastro-usuario';
import { Categorias } from './pages/categorias/categorias';
import { HomeAdmin } from './pages/admin/home-admin/home-admin';
import { CarrinhoCompras } from './pages/carrinho-compras/carrinho-compras';
import { PerfilUsuario } from './pages/perfil-usuario/perfil-usuario';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'login',
        component: Login,
        title: 'Login'
    },

    {
        path: 'cadastro',
        component: CadastroUsuario,
        title: 'Cadastro'

    },

    {
        path: 'detalhes-produtos/:id',
        component: DetalhesProdutos,
        title: 'Detalhes do Produto'

    },

    {
        path: 'categoria/:nome',
        component: Categorias,
        title: 'Categorias'

    },

    {
        path: 'carrinho',
        component: CarrinhoCompras,
        title: 'Carrinho de Compras'
    },

     {
        path: 'perfil',
        component: PerfilUsuario,
        title: 'Perfil do Usuário'
    },

    {
        path: 'admin/home',
        component: HomeAdmin,
        title: 'Home'
    },

    {
        path: 'admin/cadastro',
        component: Cadastro,
        title: 'Cadastro'
    },

    {
        path: 'admin/lista',
        component: Lista,
        title: 'Lista'
    },

    {
        path: 'admin/alterar/:id',
        component: Cadastro,
        title: 'Produto Alterar'
    },
    { path: '**', redirectTo: '' }

];

