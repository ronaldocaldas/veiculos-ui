import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiculosListagemComponent } from './veiculos/veiculos-listagem/veiculos-listagem.component';
import { VeiculoCadastroComponent } from './veiculos/veiculo-cadastro/veiculo-cadastro.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';


const routes: Routes = [
  { path: '', redirectTo: 'veiculos', pathMatch: 'full' },
  { path: 'veiculos', component: VeiculosListagemComponent },
  { path: 'veiculos/novo', component: VeiculoCadastroComponent },
  { path: 'veiculos/:codigo', component: VeiculoCadastroComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRountingModule { }
