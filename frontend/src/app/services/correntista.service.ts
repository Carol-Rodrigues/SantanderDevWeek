import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASEURL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${BASEURL}/correntistas`);
  }
  create(correntista:any): Observable<any> {
    return this.http.post(`${BASEURL}/correntistas`,correntista);
  }
}
