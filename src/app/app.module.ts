import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { CoreModule } from './core/core.module';
import { VeiculosModule } from './veiculos/veiculos.module';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { AppComponent } from './app.component';
import { ToastyModule } from 'ng2-toasty';

registerLocaleData(localePt, 'pt-BR');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VeiculosModule,
    CoreModule,
    HttpModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' },
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
