import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }

  list(): Observable<any>
  {
    return this.http.get(`${BASEURL}/movimentacoes`)
  }

  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${BASEURL}/movimentacoes/${idConta}`);
  }

  // adicionando o método de inclusão (POST) via API
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${BASEURL}/movimentacoes`,movimentacao);
  }
}
