import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosListagemComponent } from './veiculos-listagem/veiculos-listagem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VeiculosListagemComponent],
  exports: [VeiculosListagemComponent]
})
export class VeiculosModule { }
