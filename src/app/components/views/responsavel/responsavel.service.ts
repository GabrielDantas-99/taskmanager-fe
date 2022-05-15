import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Responsavel } from './responsavel.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Responsavel[]> {
    const url = `${this.baseUrl}/responsaveis`
    return this.http.get<Responsavel[]>(url)
  }

  create(responsavel: Responsavel): Observable<Responsavel> {
    const url = `${this.baseUrl}/responsaveis`
    return this.http.post<Responsavel>(url, responsavel);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    })
  }

}
