import { ConfirmationService, LazyLoadEvent } from 'primeng/api';

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

  totalRegistros = 0;
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
    this.title.setTitle('Pesquisa de veículos');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.veiculosService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.veiculos = resultado.veiculos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
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
       this.grid.first = 0;
      })
      .catch(erro => this.errorHandler.handle(erro));

    this.toasty.success('Veículo excluído com sucesso!');
  }
}
