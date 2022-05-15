import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa-read-all',
  templateUrl: './tarefa-read-all.component.html',
  styleUrls: ['./tarefa-read-all.component.css']
})
export class TarefaReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'tarefas', 'acoes'];

  constructor() { }

  ngOnInit(): void {
  }

}
