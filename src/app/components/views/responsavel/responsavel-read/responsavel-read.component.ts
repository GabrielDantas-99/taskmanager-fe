import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // verificar import
import { Responsavel } from '../responsavel.model';
import { ResponsavelService } from '../responsavel.service'; 

@Component({
  selector: 'app-responsavel-read',
  templateUrl: './responsavel-read.component.html',
  styleUrls: ['./responsavel-read.component.css']
})
export class ResponsavelReadComponent implements OnInit {

  responsaveis: Responsavel[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'tarefas', 'acoes'];

  constructor(private service: ResponsavelService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();   // Chama o método sempre que a página é carregada
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.responsaveis = resposta;
    })
  }

  navegarParaResponsavelCreate() {
    this.router.navigate(["responsaveis/create"]);
  }

}
