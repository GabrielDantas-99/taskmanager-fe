import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByResponsavel(id_resp: String): Observable<Tarefa[]> {
    const url = `${this.baseUrl}/tarefas?responsavel=${id_resp}`
    return this.http.get<Tarefa[]>(url)
  }

  findById(id: String): Observable<Tarefa> {
    const url = `${this.baseUrl}/tarefas/${id}`
    return this.http.get<Tarefa>(url)
  }

  update(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.baseUrl}/tarefas/${tarefa.id}`
    return this.http.put<Tarefa>(url, tarefa)
  }

  create(tarefa: Tarefa, id_resp: String): Observable<Tarefa> {
    const url = `${this.baseUrl}/tarefas?responsavel=${id_resp}`
    return this.http.post<Tarefa>(url, tarefa)
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/tarefas/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    })
  }
}
