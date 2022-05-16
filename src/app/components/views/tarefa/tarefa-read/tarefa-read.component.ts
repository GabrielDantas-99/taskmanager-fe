import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-read',
  templateUrl: './tarefa-read.component.html',
  styleUrls: ['./tarefa-read.component.css']
})
export class TarefaReadComponent implements OnInit {

  id_resp: String =''

  tarefa: Tarefa = {
    id: '',
    titulo: '',
    descricao: '',
    prioridade: '',
    deadline: '',
  }

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

}
