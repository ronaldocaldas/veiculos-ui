import { VeiculoFiltro } from './veiculo.service';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Veiculo } from '../core/model';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export interface VeiculoFiltro {
  modelo: string;
}

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  veiculosUrl = 'http://localhost:8080/veiculos';

  constructor(private http: Http) { }

  pesquisar(filtro: VeiculoFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    if (filtro.modelo) {
      params.set('modelo', filtro.modelo);

    }

    return this.http.get(this.veiculosUrl, { headers, search: params })
      .toPromise()
      .then(response => response.json().content);
  }

  adicionar(veiculo: Veiculo): Promise<Veiculo> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.veiculosUrl,
      JSON.stringify(veiculo), { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(codigo: number): Promise<any> {
    return this.http.delete(`${this.veiculosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);

  }

  buscarPorCodigo(codigo: number): Promise<Veiculo> {
    const headers = new Headers();

    return this.http.get(`${this.veiculosUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const veiculo = response.json() as Veiculo;

        this.converterStringsParaDatas([veiculo]);

        return veiculo;
      });
  }

  atualizar(veiculo: Veiculo): Promise<Veiculo> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.veiculosUrl}/${veiculo.codigo}`,
      JSON.stringify(veiculo), { headers })
      .toPromise()
      .then(response => {
        const veiculoAlterado = response.json() as Veiculo;

        this.converterStringsParaDatas([veiculoAlterado]);

        return veiculoAlterado;
      });
  }
  private converterStringsParaDatas(veiculos: Veiculo[]) {
    for (const veiculo of veiculos) {
      veiculo.manutencao = moment(veiculo.manutencao,
        'YYYY-MM-DD').toDate();

    }
  }

}
