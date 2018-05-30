import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo-cadastro',
  templateUrl: './veiculo-cadastro.component.html',
  styleUrls: ['./veiculo-cadastro.component.css']
})
export class VeiculoCadastroComponent implements OnInit {

  cambios = [
    { label: 'Manual', value: 'MANUAL' },
    { label: 'Automático', value: 'AUTOMATICO' },
  ];
  categorias = [
    { label: 'Hatch', value: 'HACTH' },
    { label: 'Sedan', value: 'SEDAN' },
    { label: 'Suv', value: 'SUV' },
  ];
  tipos = [
    { label: 'Econômico', value: 'ECO' },
    { label: 'Executivo', value: 'EXE' },
    { label: 'Adaptado', value: 'ADA' },
  ];

  marcas = [
    { label: 'Ford', value: 'FORD' },
    { label: 'Volkswagen', value: 'VOLK' },
    { label: 'Chevrolet', value: 'CHEV' },
    { label: 'Fiat', value: 'FIAT' },
    { label: 'Honda', value: 'HOND' },
    { label: 'Hyundai', value: 'HYUD' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
