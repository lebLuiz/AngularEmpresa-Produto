import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaempresaComponent } from './listaempresa.component';

describe('ListaempresaComponent', () => {
  let component: ListaempresaComponent;
  let fixture: ComponentFixture<ListaempresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaempresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
