import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-update',
  templateUrl: './tarefa-update.component.html',
  styleUrls: ['./tarefa-update.component.css']
})
export class TarefaUpdateComponent implements OnInit {

  id_resp: String =''

  tarefa: Tarefa = {
    id: '',
    titulo: '',
    descricao: '',
    prioridade: '',
    deadline: '',
  }

  titulo = new FormControl('', [Validators.minLength(3)])
  descricao = new FormControl('', [Validators.minLength(8)])
  prioridade = new FormControl('', [Validators.minLength(3)])
  deadline = new FormControl('', [Validators.minLength(10)])

  constructor(
    private service: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_resp = this.route.snapshot.paramMap.get('id_resp')!;
    this.tarefa.id = this.route.snapshot.paramMap.get('id')!;
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`responsaveis/${this.id_resp}/tarefas`]);
  }

  findById(): void {
    this.service.findById(this.tarefa.id!).subscribe((resposta) => {
      this.tarefa = resposta
    })
  }

  update(): void {
    this.service.update(this.tarefa).subscribe((resposta) => {
      this.router.navigate([`responsaveis/${this.id_resp}/tarefas`]);
      this.service.mensagem("Tarefa atualizada com sucesso!")
    }, err => {
      this.router.navigate([`responsaveis/${this.id_resp}/tarefas`]);
      this.service.mensagem("Falha ao atualizar tarefa! Tente novamente mais tarde!")
    })
  }

  getMessage() {
    if(this.titulo.invalid) {
      return 'O campo Título deve conter entre 3 e 50 caracteres'
    }
    if(this.descricao.invalid) {
      return 'O campo Descrição deve conter entre 3 e 500 caracteres'
    }
    if(this.deadline.invalid) {
      return 'O campo Título deve conter entre 3 e 20 caracteres'
    }
    return false;
  }

}