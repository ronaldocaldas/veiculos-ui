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
       dataLocacao: '01/01/2017',
      dataDataEntrega: '1/02/2017',
      locado: true,
      valor: 10098
    },
    {
      marca: 'CHEVROLET',
      modelo: 'Corsa',
      placa: 'IUY-987',
      valor: 120,
      dataLocacao: '1/06/2017',
      dataDataEntrega: '12/08/2017',
      locado: true
    },
    {
      codigo: 3,
      marca: 'FORD',
      modelo: 'Fusion',
      placa: 'VBN-234',
      dataLocacao: null,
      dataDataEntrega: null,
      locado: false,
      valor: 220
    },
    {
      codigo: 4,
      marca: 'VOLKSWAGEN',
      modelo: 'Golf',
      placa: 'GAD-931',
      dataLocacao: null,
      dataDataEntrega: null,
      locado: false,
      valor: 300
    }
  ];
}
