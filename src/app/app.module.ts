import { AppRountingModule } from './app-routing.modules';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CoreModule } from './core/core.module';
import { VeiculosModule } from './veiculos/veiculos.module';

import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { VeiculosListagemComponent } from './veiculos/veiculos-listagem/veiculos-listagem.component';
import { VeiculoCadastroComponent } from './veiculos/veiculo-cadastro/veiculo-cadastro.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    VeiculosModule,
    CoreModule,
    AppRountingModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
