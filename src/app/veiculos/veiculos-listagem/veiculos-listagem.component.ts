import { ConfirmationService } from 'primeng/api';

import { ToastyService } from 'ng2-toasty';
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

  constructor(private veiculosService: VeiculoService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.veiculosService.pesquisar()
      .then(veiculos => this.veiculos = veiculos);
  }

  confirmarExclusao(veiculo: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(veiculo);
      }
    });
  }
  excluir(veiculo: any) {
    this.veiculosService.excluir(veiculo.codigo)
      .then(() => {
        this.pesquisar();
      });
    this.toasty.success('Veículo excluído com sucesso!');
  }
}
