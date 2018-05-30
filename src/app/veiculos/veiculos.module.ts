import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

import { SharedModule } from './../shared/shared.module';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { VeiculoCadastroComponent } from './veiculo-cadastro/veiculo-cadastro.component';
import { VeiculosListagemComponent } from './veiculos-listagem/veiculos-listagem.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule,
    SharedModule
  ],
  declarations: [VeiculosListagemComponent, VeiculoCadastroComponent],
  exports: [VeiculosListagemComponent, VeiculoCadastroComponent]
})
export class VeiculosModule { }
