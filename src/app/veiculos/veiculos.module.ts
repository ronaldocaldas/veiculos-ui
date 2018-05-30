import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosListagemComponent } from './veiculos-listagem/veiculos-listagem.component';

import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';


import { CurrencyMaskModule } from 'ng2-currency-mask';


import { DataTableModule } from 'primeng/components/datatable/datatable';


@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ButtonModule,
    CurrencyMaskModule,
    TooltipModule

  ],
  declarations: [VeiculosListagemComponent],
  exports: [VeiculosListagemComponent]
})
export class VeiculosModule { }
