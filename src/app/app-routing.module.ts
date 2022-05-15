import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { ResponsavelCreateComponent } from './components/views/responsavel/responsavel-create/responsavel-create.component';
import { ResponsavelDeleteComponent } from './components/views/responsavel/responsavel-delete/responsavel-delete.component';
import { ResponsavelReadComponent } from './components/views/responsavel/responsavel-read/responsavel-read.component';
import { ResponsavelUpdateComponent } from './components/views/responsavel/responsavel-update/responsavel-update.component';
import { TarefaCreateComponent } from './components/views/tarefa/tarefa-create/tarefa-create.component';
import { TarefaReadAllComponent } from './components/views/tarefa/tarefa-read-all/tarefa-read-all.component';

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
  },
  {
    path: 'responsaveis/update/:id',
    component: ResponsavelUpdateComponent
  },
  {
    path: 'responsaveis/:id_resp/tarefas',
    component: TarefaReadAllComponent
  },
  {
    path: 'responsaveis/:id_resp/tarefas/create',
    component: TarefaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
