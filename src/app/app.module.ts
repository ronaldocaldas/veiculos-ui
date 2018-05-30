import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TabViewModule} from 'primeng/tabview';

import { AppComponent } from './app.component';
import { VeiculosModule } from './veiculos/veiculos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VeiculosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
