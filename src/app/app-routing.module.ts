import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { ResponsavelCreateComponent } from './components/views/responsavel/responsavel-create/responsavel-create.component';
import { ResponsavelDeleteComponent } from './components/views/responsavel/responsavel-delete/responsavel-delete.component';
import { ResponsavelReadComponent } from './components/views/responsavel/responsavel-read/responsavel-read.component';

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
  },
  {
    path: 'responsaveis/delete/:id',
    component: ResponsavelDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
