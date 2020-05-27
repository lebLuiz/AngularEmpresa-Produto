import { Component, OnInit } from '@angular/core';
import { Empresa } from '../Empresa';
import { EmpresaService } from '../service/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastroempresa',
  templateUrl: './cadastroempresa.component.html',
  styleUrls: ['./cadastroempresa.component.css']
})
export class CadastroempresaComponent implements OnInit {

  empresa: Empresa = new Empresa();
  title: string = "";
  msgDsNomeEmpresa: string = "";
  msgDsCnpj: string = "";
  msgDsResponsavel: string = "";
  msgDsDesdeAno: string = "";
  msgDescricao: string = "";

  constructor(private servico: EmpresaService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    let idEmpresa = Number(this.route.snapshot.params['idEmpresa']);

    if(idEmpresa){
      this.title = "Alterando Empresa";

      this.servico.findById(idEmpresa)
      .subscribe(resposta => {
        this.empresa = resposta;
        localStorage.setItem('idEmpresa',`${idEmpresa}`);
      });

    }else{
      this.title = "Cadastro de Empresa";
      this.empresa = new Empresa();
    }

  }

  salvar(){
    if(this.validaCampos()){

      if(!this.empresa.idEmpresa){
        this.save();
      }else{
        this.update();
      }
    }
  }

  save(){
    this.servico.save(this.empresa).subscribe(resposta => {
      this.empresa = resposta;
      this.router.navigate(['/empresas']);
    })
  }

  update(){
    this.servico.update(this.empresa).subscribe(resposta => {
      this.empresa = resposta;
      this.router.navigate(['/empresas']);
    })
  }

  validaCampos(): boolean {

    let retorno: boolean = true;
    
    if(this.empresa.nomeEmpresa === ""){
      this.msgDsNomeEmpresa = "Informe o nome da Empresa";
      retorno = false;
    }
    if(this.empresa.cnpj === ""){
      this.msgDsCnpj = "Informe o CNPJ da Empresa";
      retorno = false;
    }
    if(this.empresa.responsavel === ""){
      this.msgDsResponsavel = "Informe o Responsável da Empresa";
      retorno = false;
    }
    if(this.empresa.desdeAno === null){
      this.msgDsDesdeAno = "Informe o Ano de Criação da Empresa";
      retorno = false;
    }
    if(this.empresa.descricao === ""){
      this.msgDescricao = "Informe pelo menos uma breve descrição da Empresa"
      retorno = false;
    }

    return retorno;

  }
}
