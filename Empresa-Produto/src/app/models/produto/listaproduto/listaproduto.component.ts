import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.css']
})
export class ListaprodutoComponent implements OnInit {

  title: string = "Lista de Produtos";
  listagem: Produto[];

//SEPA VAI TER QUE FAZER UM @INPUT PARA PEGAR O ID DA EMPRESA REFERÊNCIAL

  constructor(private servico: ProdutoService) { }
  
  ngOnInit() {
    this.title;

    let idE = localStorage.getItem('idEmpresa');
      this.servico.findByIdEmpresa(idE)
      .subscribe(resposta => {
        this.listagem = resposta;
      });

  }

  deleteProduto(idProduto: number){
    this.servico.delete(idProduto)
    .subscribe(resposta => {
      this.carregaLista();
    });
  }

  /*carregarLista(idEmpresa: number){
    this.servico.findByIdEmpresa(idEmpresa)
    .subscribe(resposta => {
      this.listagem = resposta;
    })
  }*/

  carregaLista(){
    this.servico.findAll()
    .subscribe(resposta => {
      this.listagem = resposta;
    }, err => {
      
    });
  }

}
