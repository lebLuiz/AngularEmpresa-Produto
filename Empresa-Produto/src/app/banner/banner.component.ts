import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  @Input() cont = localStorage.getItem('quant.Empresas');

  constructor() {}

  ngOnInit() {
  }

}
