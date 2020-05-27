import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusuperiorComponent } from './menusuperior/menusuperior.component';
import { PrincipalComponent } from './principal/principal.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { CadastroempresaComponent } from './models/empresa/cadastroempresa/cadastroempresa.component';
import { ListaempresaComponent } from './models/empresa/listaempresa/listaempresa.component';
import { CadastroprodutoComponent } from './models/produto/cadastroproduto/cadastroproduto.component';
import { ListaprodutoComponent } from './models/produto/listaproduto/listaproduto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FotoComponent } from './foto/foto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusuperiorComponent,
    PrincipalComponent,
    RodapeComponent,
    CardComponent,
    BannerComponent,
    CadastroempresaComponent,
    ListaempresaComponent,
    CadastroprodutoComponent,
    ListaprodutoComponent,
    FormularioComponent,
    FotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
