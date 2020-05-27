import { Injectable } from '@angular/core';
import { Produto } from '../Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = 'http://localhost:8080/Treinando/ProdutoEndpoint';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  //MÉTODOS DE BUSCA - GET
  findAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(apiUrl)
    .pipe(
      catchError(this.handleError('findAll', []))
    );
  }

  findById(id: number): Observable<Produto> {
    const url = `${apiUrl}?idProduto=${id}`;

    return this.http.get<Produto>(url);
  }

  /*UTILIZEI UM PARÂMETRO SEM INFORMAR QUAL SERIA O TIPO,
    POIS LA NO 'ListaprodutoComponent' O ID DA EMPRESA É
    PASSADO PARA O 'LOCAL-STORAGE', NO QUAL TERIA QUE SER
    UMA STRING*/ 
  findByIdEmpresa(idEmpresa): Observable<Produto[]>{
    const url = `${apiUrl}?idEmpresa=${idEmpresa}`;

    return this.http.get<Produto[]>(url)
    .pipe(
      catchError(this.handleError('findByIdEmpresa', []))
    );
  }

  //MÉTODOS DE SALVAR E ATUALIZAR
  save(produto): Observable<Produto>{
    return this.http.post<Produto>(apiUrl, produto, httpOptions);
  }

  update(produto): Observable<Produto>{
    return this.http.put<Produto>(apiUrl, produto, httpOptions);
  }

  //MÉTODO DE DELETAR
  delete(id: number): Observable<void> {
    const url = `${apiUrl}?idProduto=${id}`;

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
