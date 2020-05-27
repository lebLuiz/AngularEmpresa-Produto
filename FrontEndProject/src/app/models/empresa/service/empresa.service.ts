import { Injectable } from '@angular/core';
import { Empresa } from '../Empresa';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = 'http://localhost:8080/BackEndProject/EmpresaEndpoint';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  //MÉTODOS DE BUSCA - GET
  findAll(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(apiUrl)
    .pipe(
      catchError(this.handleError('findAll', []))
    );
  }

  findById(id: number): Observable<Empresa>{
    const url = `${apiUrl}?idEmpresa=${id}`;

    return this.http.get<Empresa>(url);
  }

  //MÉTODOS DE SALVAR E ATUALIZAR
  save(empresa): Observable<Empresa>{
    return this.http.post<Empresa>(apiUrl, empresa, httpOptions);
  }

  update(empresa): Observable<Empresa>{
    return this.http.put<Empresa>(apiUrl, empresa, httpOptions);
  }

  //MÉTODO DE DELETAR
  delete(id: number): Observable<void>{
    const url = `${apiUrl}?idEmpresa=${id}`;

    return this.http.delete<void>(url);
  }

  //MÉTODO PARA LIDAR COM O ERRO QUE POSSA VIR
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);

      return of(result as T);
    }
  } 
}
