import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Veiculo } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculosUrl = 'http://localhost:8080/veiculos';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    return this.http.get(this.veiculosUrl)
      .toPromise()
      .then(response => response.json().content);
  }

  adicionar(lancamento: Veiculo): Promise<Veiculo> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.veiculosUrl,
        JSON.stringify(lancamento), { headers })
      .toPromise()
      .then(response => response.json());
  }

}
