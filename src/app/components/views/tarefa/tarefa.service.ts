import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

  findAllByResponsavel(id_resp: String): Observable<Tarefa[]> {
    const url = `${this.baseUrl}/tarefas?responsavel=${id_resp}`
    return this.http.get<Tarefa[]>(url)
  }
}
