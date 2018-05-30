import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.css']
})
export class VeiculosListagemComponent {

  veiculos = [
    {
      marca: 'FIAT',
      modelo: 'Uno',
      placa: 'MDK-983',
      dataManutencao: '01/01/2017',
      locado: true,
      seguro: 10098
    },
    {
      marca: 'CHEVROLET',
      modelo: 'Corsa',
      placa: 'IUY-987',
      dataManutencao: '1/06/2017',
      seguro: 120,
      locado: true
    },
    {
      codigo: 3,
      marca: 'FORD',
      modelo: 'Fusion',
      placa: 'VBN-234',
      dataManutencao: null,
      locado: false,
      seguro: 220
    },
    {
      codigo: 4,
      marca: 'VOLKSWAGEN',
      modelo: 'Golf',
      placa: 'GAD-931',
      dataManutencao: null,
      locado: false,
      seguro: 300
    }
  ];
}
