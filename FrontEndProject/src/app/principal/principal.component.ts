import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa/Empresa';
import { EmpresaService } from '../models/empresa/service/empresa.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  list: Empresa[];

  constructor(private servico: EmpresaService) { }

  ngOnInit() {
    this.carregarList();
    localStorage.removeItem('idEmpresa');
  }

  carregarList(){
    this.servico.findAll()
    .subscribe(resposta => {
      this.list = resposta;
    }, err => {

    });
  }

}
