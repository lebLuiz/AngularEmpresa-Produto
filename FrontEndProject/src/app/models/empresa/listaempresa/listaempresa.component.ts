import { Component, OnInit } from '@angular/core';
import { Empresa } from '../Empresa';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-listaempresa',
  templateUrl: './listaempresa.component.html',
  styleUrls: ['./listaempresa.component.css']
})
export class ListaempresaComponent implements OnInit {

  title: string = "";
  listagem: Empresa[];

  constructor(private servico: EmpresaService) { }

  ngOnInit() {
    this.title = "Lista de Empresas";
    this.carregarLista();
  }

  deleteEmpresa(idEmpresa: number){
    this.servico.delete(idEmpresa).subscribe(resposta => {
      this.carregarLista();
    });
  }


  carregarLista(){
    //abre o loading
    this.servico.findAll()
    .subscribe(resposta => {
      this.listagem = resposta;
      for(let i=0; i <= this.listagem.length; i++){
        localStorage.setItem('quant.Empresas', `${i}`);
      }
    }, err => {

    });
  }
}
