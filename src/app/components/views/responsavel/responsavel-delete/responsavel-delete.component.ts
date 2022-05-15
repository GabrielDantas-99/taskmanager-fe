import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsavel } from '../responsavel.model';
import { ResponsavelService } from '../responsavel.service';

@Component({
  selector: 'app-responsavel-delete',
  templateUrl: './responsavel-delete.component.html',
  styleUrls: ['./responsavel-delete.component.css']
})
export class ResponsavelDeleteComponent implements OnInit {

  responsavel: Responsavel = {
    id: '',
    nome: '',
    descricao: '',
  }

  constructor(private service: ResponsavelService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.responsavel.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.responsavel.id!).subscribe((resposta) => {
      this.responsavel.nome = resposta.nome;
      this.responsavel.descricao = resposta.descricao;
    })
  }

  delete(): void {
    this.service.delete(this.responsavel.id!).subscribe((resposta) => {
      this.router.navigate(['responsaveis'])
      this.service.mensagem('Resposavel deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['responsaveis'])
  }

}
