import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  /* Atributo que guarda o id */
  routerId = null;

  /* Objeto que recebe a foto da API */
  imagem:any = {};

  /* ActivedRouter - permite pegar o id numa rota(url) */
  constructor(private Activ: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    /* Gaurda o id dentro da variavel routerId */
    this.routerId = this.Activ.snapshot.params['id'];

    if(this.routerId){
      this.http.get('http://localhost:3000/fotos/' + this.routerId).subscribe(caixinha => this.imagem = caixinha);
    }
  }
}
