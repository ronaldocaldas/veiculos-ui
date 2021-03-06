import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';
import { Veiculo } from '../../core/model';
import { VeiculoService } from '../veiculo.service';
import { ErrorHandlerService } from '../../core/error-handler.service';


@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styleUrls: ['./veiculo-cadastro.component.css']
})
export class VeiculoCadastroComponent implements OnInit {

  cambios = [
    { label: 'Manual', value: 'Manual' },
    { label: 'Automático', value: 'Automático' },
  ];
  categorias = [
    { label: 'Hatch', value: 'Hatch' },
    { label: 'Sedan', value: 'Sedan' },
    { label: 'Suv', value: 'Suv' },
  ];
  tipos = [
    { label: 'Econômico', value: 'Econômico' },
    { label: 'Executivo', value: 'Executivo' },
    { label: 'Adaptado', value: 'Adaptado' },
  ];

  marcas = [
    { label: 'Ford', value: 'Ford' },
    { label: 'Volkswagen', value: 'Volkswagen' },
    { label: 'Chevrolet', value: 'Chevrolet' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Hyundai', value: 'Hyundai' },
  ];

  veiculo = new Veiculo();
  constructor(
    private veiculoService: VeiculoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title) { }

  ngOnInit() {
    const codigoVeiculo = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo veículo');
    if (codigoVeiculo) {
      this.carregarVeiculo(codigoVeiculo);

    }
  }

  adicionarVeiculo(form: FormControl) {
    this.veiculoService.adicionar(this.veiculo)
      .then(() => {
        this.toasty.success('Veículo adicionado com sucesso!');
        form.reset();
        this.veiculo = new Veiculo();
      })
      .catch(erro => this.errorHandler);
  }

  carregarVeiculo(codigo: number) {
    this.veiculoService.buscarPorCodigo(codigo)
      .then(veiculo => {
        this.veiculo = veiculo;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarVeiculo(form);
    } else {
      this.adicionarVeiculo(form);
    }
  }

  atualizarVeiculo(form: FormControl) {
    this.veiculoService.atualizar(this.veiculo)
      .then(veiculo => {
        this.veiculo = veiculo;
        this.toasty.success('Veículo alterado com sucesso!');
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.veiculo.codigo);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de veículo: ${this.veiculo.modelo}`);
  }
}
