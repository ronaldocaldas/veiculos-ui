import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    { label: 'Ford', value: 'FORD' },
    { label: 'Volkswagen', value: 'VOLK' },
    { label: 'Chevrolet', value: 'CHEV' },
    { label: 'Fiat', value: 'FIAT' },
    { label: 'Honda', value: 'HOND' },
    { label: 'Hyundai', value: 'HYUD' },
  ];

  veiculo = new Veiculo();
  constructor(
    private veiculoService: VeiculoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.veiculoService.adicionar(this.veiculo)
      .then(() => {
        this.toasty.success('Veículo adicionado com sucesso!');
        form.reset();
        this.veiculo = new Veiculo();
      })
      .catch(erro => this.errorHandler);
  }
}
