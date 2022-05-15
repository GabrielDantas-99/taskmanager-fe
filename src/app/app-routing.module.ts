import { ResponsavelCreateComponent } from './components/views/responsavel/responsavel-create/responsavel-create.component';
import { ResponsavelReadComponent } from './components/views/responsavel/responsavel-read/responsavel-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'responsaveis',
    component: ResponsavelReadComponent
  },
  {
    path: 'responsaveis/create',
    component: ResponsavelCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
