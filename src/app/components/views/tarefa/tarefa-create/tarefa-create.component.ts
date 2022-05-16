import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})
export class TarefaCreateComponent implements OnInit {

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
  prioridade = new FormControl('', [Validators.minLength(8)])
  deadline = new FormControl('', [Validators.minLength(10)])

  constructor(
    private service: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id_resp = this.route.snapshot.paramMap.get('id_resp')!
  }

  create(): void {
    this.service.create(this.tarefa, this.id_resp).subscribe((resposta) => {
      this.router.navigate([`responsaveis/${this.id_resp}/tarefas`]);
      this.service.mensagem("Tarefa criada com sucesso!");
    }, err => {
      this.router.navigate([`responsaveis/${this.id_resp}/tarefas`]);
      this.service.mensagem("Erro ao criar nova tarefa! Tente novamente mais tarde!");
    })
  }

  cancel(): void {
    this.router.navigate([`responsaveis/${this.id_resp}/tarefas`]);
  }

  getMessage() {
    if(this.titulo.invalid) {
      return 'O campo Título deve conter entre 3 e 50 caracteres!'
    }
    if(this.descricao.invalid) {
      return 'O campo Descrição deve conter entre 3 e 500 caracteres!'
    }
    if(this.prioridade.invalid) {
      return 'O campo Prioridade deve ser selecionado!'
    }
    if(this.deadline.invalid) {
      return 'O campo Título deve conter entre 3 e 20 caracteres!'
    }
    return false;
  }

}
