import { ActivatedRoute, Router } from '@angular/router';
import { ResponsavelService } from './../responsavel.service'; // Revisar import
import { Component, OnInit } from '@angular/core';
import { Responsavel } from '../responsavel.model';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-responsavel-update',
  templateUrl: './responsavel-update.component.html',
  styleUrls: ['./responsavel-update.component.css']
})
export class ResponsavelUpdateComponent implements OnInit {

  responsavel: Responsavel = {
    id: "",
    nome: "",
    descricao: ""
  }

  constructor(
    private service: ResponsavelService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.responsavel.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.responsavel.id!).subscribe((resposta) => {
      this.responsavel.nome = resposta.nome
      this.responsavel.descricao = resposta.descricao
    })
  }

  update(): void {
    this.service.update(this.responsavel).subscribe((resposta) => {
      this.router.navigate(['responsaveis'])
      this.service.mensagem('Responsavel atualizado com sucesso!')
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente!')
    })
  }

  cancel(): void {
    this.router.navigate(['responsaveis'])
  }

}
