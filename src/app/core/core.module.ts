import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { Veiculo } from './model';
import { VeiculoService } from '../veiculos/veiculo.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ErrorHandlerService,
    ConfirmationService,
    VeiculoService
  ]
})
export class CoreModule { }
