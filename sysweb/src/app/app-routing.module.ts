import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ListaComponent } from './modules/lista/lista.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent) },
  { path: 'cadastro', loadComponent: () => import('./modules/cadastro-form/cadastro-form.component').then(m => m.CadastroFormComponent) },
  { path: 'lista', loadComponent: () => import('./modules/lista/lista.component').then(m => m.ListaComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
