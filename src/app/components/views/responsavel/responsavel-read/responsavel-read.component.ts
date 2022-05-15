import { Component, OnInit } from '@angular/core';
import { Responsavel } from '../responsavel.model';
import { ResponsavelService } from '../responsavel.service'; // verificar import

@Component({
  selector: 'app-responsavel-read',
  templateUrl: './responsavel-read.component.html',
  styleUrls: ['./responsavel-read.component.css']
})
export class ResponsavelReadComponent implements OnInit {

  responsaveis: Responsavel[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  constructor(private service: ResponsavelService) { }

  ngOnInit(): void {
    this.findAll();   // Chama o método sempre que a página é carregada
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.responsaveis = resposta;
    })
  }

}
