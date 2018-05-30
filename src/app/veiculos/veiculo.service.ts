import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Veiculo } from '../core/model';

import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculosUrl = 'http://localhost:8080/veiculos';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    const headers = new Headers();
    return this.http.get(this.veiculosUrl, { headers })
      .toPromise()
      .then(response => response.json());
  }

  adicionar(lancamento: Veiculo): Promise<Veiculo> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.veiculosUrl,
      JSON.stringify(lancamento), { headers })
      .toPromise()
      .then(response => response.json().content);
  }

}
