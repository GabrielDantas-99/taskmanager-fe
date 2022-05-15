import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-read-all',
  templateUrl: './tarefa-read-all.component.html',
  styleUrls: ['./tarefa-read-all.component.css']
})
export class TarefaReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'tarefas', 'acoes'];

  id_resp: String = '';

  tarefas: Tarefa[] = [];

  constructor(private service: TarefaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_resp = this.route.snapshot.paramMap.get('id_resp')!;
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByResponsavel(this.id_resp).subscribe((resposta) => {
      this.tarefas = resposta;
      console.log(this.tarefas)
    });
  }
}
