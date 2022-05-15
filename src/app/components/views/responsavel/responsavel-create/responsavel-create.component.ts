import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Responsavel } from '../responsavel.model';
import { ResponsavelService } from '../responsavel.service';

@Component({
  selector: 'app-responsavel-create',
  templateUrl: './responsavel-create.component.html',
  styleUrls: ['./responsavel-create.component.css']
})
export class ResponsavelCreateComponent implements OnInit {

  responsavel: Responsavel = {
    nome: '',
    descricao: ''
  }

  constructor(private service: ResponsavelService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.responsavel).subscribe((resposta) => {
      this.router.navigate(['responsaveis']);
      this.service.mensagem('Responsável cadastrado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['responsaveis']);
  }

}
