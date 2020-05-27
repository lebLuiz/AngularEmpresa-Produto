import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListaempresaComponent } from './models/empresa/listaempresa/listaempresa.component';
import { CadastroempresaComponent } from './models/empresa/cadastroempresa/cadastroempresa.component';
import { ListaprodutoComponent } from './models/produto/listaproduto/listaproduto.component';
import { CadastroprodutoComponent } from './models/produto/cadastroproduto/cadastroproduto.component';


const routes: Routes = [

    { path: '', component: PrincipalComponent, pathMatch: 'full' },
    { path: 'empresas', component: ListaempresaComponent },
    { path: 'empresa', component: CadastroempresaComponent },
    { path: 'empresa/:idEmpresa', component: CadastroempresaComponent },
    { path: 'produtos', component: ListaprodutoComponent },
    { path: 'produto', component: CadastroprodutoComponent },
    { path: 'produto/:idProduto', component: CadastroprodutoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
