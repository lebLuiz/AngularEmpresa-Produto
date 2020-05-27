import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../../empresa/Empresa';

@Component({
  selector: 'app-cadastroproduto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css']
})
export class CadastroprodutoComponent implements OnInit {

  produto: Produto = new Produto();
  title: string = "";
  msgDsNomeProduto: string = "";
  msgDsValor: string = "";
  msgDsIdE: string = "";

  constructor(private servico: ProdutoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    let idProduto = Number(this.route.snapshot.params['idProduto']);

    if(idProduto){
      this.title = "Alterando Produto";

      this.servico.findById(idProduto)
      .subscribe(resp => {
        this.produto = resp;
      });

    }else{
      this.title = "Cadastro de Produto";
      this.produto = new Produto();
      
    }

  }

  salvar(){
    if(this.validaCampos()){

      if(!this.produto.idProduto){
        this.save();
      }else{
        this.update();
      }
    }
  }

  save(){
    //let idEmpresa = localStorage.getItem('idEmpresa');
    //let idE = Number(this.route.data[`empresa: {idEmpresa: ${idEmpresa}`]);
    this.servico.save(this.produto).subscribe(resp => {
      this.produto = resp;
      this.router.navigate(['/produtos']);
    });
  }

  update(){
    this.servico.update(this.produto).subscribe(resp => {
      this.produto = resp;
      this.router.navigate(['/produtos']);
    });
  }

  validaCampos(): boolean {

    let retorno: boolean = true;

    if(this.produto.empresa.idEmpresa === null){
      this.msgDsIdE = "Informe o Id Da Empresa";
      retorno = false;
    }
    if(this.produto.nomeProduto === ""){
      this.msgDsNomeProduto = "Informe o Nome do Produto";
      retorno = false;
    }
    if(this.produto.valor === null){
      this.msgDsValor = "Informe o Valor do Produto";
      retorno = false;
    }

    return retorno;

  }
}
