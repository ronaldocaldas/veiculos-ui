import { ConfirmationService } from 'primeng/api';

import { ToastyService } from 'ng2-toasty';

import { Headers, Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { VeiculoService, VeiculoFiltro } from './../veiculo.service';
import { Veiculo } from './../../core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';



@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.css']
})
export class VeiculosListagemComponent implements OnInit {

  filtro = new VeiculoFiltro();
  veiculos = [];
  @ViewChild('tabela') grid;

  constructor(private veiculosService: VeiculoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.pesquisar();
    this.title.setTitle('Pesquisa de lancamentos');
  }

  pesquisar() {
    this.veiculosService.pesquisar(this.filtro)
      .then(resultado => {
          this.veiculos = resultado.veiculos;
      })
      .catch(erro => this.errorHandler.handle(erro));
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
      })
      .catch(erro => this.errorHandler.handle(erro));

    this.toasty.success('Veículo excluído com sucesso!');
  }
}
