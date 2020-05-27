import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  @Input() linkFoto: string;
  @Input() titulo: string;
  @Input() tamanhoFoto: string;

  constructor() { }

  ngOnInit() {
  }

}
