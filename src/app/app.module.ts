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

registerLocaleData(localePt, 'pt-BR');

const routes: Routes = [
  {
    path: 'veiculos', component: VeiculosListagemComponent
  },
  { path: 'veiculos/novo', component: VeiculoCadastroComponent },
  { path: 'veiculos/:codigo', component: VeiculoCadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    VeiculosModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
