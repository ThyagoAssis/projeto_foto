import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

   /* Criando o nosso tradutor */
   httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  
  /* ActivedRouter - permite pegar o id numa rota(url) */
  constructor(
    private Activ: ActivatedRoute, 
    private http: HttpClient,
    private router: Router
    ){}

  ngOnInit(): void {
    /* Guarda o id dentro da variavel routerId */
    this.routerId = this.Activ.snapshot.params['id'];

    if(this.routerId){
      /* Pega a foto no banco de dados e passa para o objeto imagem */
      this.http.get('http://localhost:3000/fotos/' + this.routerId).subscribe(caixinha => this.imagem = caixinha);
    }
  }

  /* Método de edição chamado pelo ngSubmit */
  editar(form:any){
    this.http.put('http://localhost:3000/fotos/' + this.routerId, form.value, this.httpOptions).subscribe();

    this.router.navigate(['/']);
  }
}
