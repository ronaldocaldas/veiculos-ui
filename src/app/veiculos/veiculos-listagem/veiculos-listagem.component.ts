import { Headers, Http } from '@angular/http';

import { VeiculoService } from './../veiculo.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Veiculo } from './../../core/model';

@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.css']
})
export class VeiculosListagemComponent implements OnInit {

  veiculos = [];
  @ViewChild('tabela') grid;

  constructor(private veiculosService: VeiculoService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.veiculosService.pesquisar()
      .then(veiculos => this.veiculos = veiculos);
  }

  excluir(veiculo: any) {
    this.veiculosService.excluir(veiculo.codigo)
      .then(() => {
        this.pesquisar();
      });
  }
}
