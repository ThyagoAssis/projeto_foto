import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  /* Criando o nosso tradutor */
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  nameButton = "Enviar";
 
  /* 
    Injeção de dependencia - é quando nossa aplicação depende de uma ferramenta para realizar alguma tarefa 
    Para fazer a injeçaõ de dependencia precisamos do construtor
    Boa prática - usar o construtor somente para injeção de dependencia
  */

  constructor(private http:HttpClient){}  

  /* Método de cadastro */
  cadastro(form:any){
    /* console.log(form.value); */
   /*  alert(form.value.titulo + " " + form.value.url); */
    /* document.write("<strong>Título: </strong>" + form.value.titulo + "<br><hr>" + "<strong>URL: </strong>"+ form.value.url); */
    /* this.dados = form.value */

    /* Utilizando a ferramenta httpclient para cadastro */
    this.http.post('http://localhost:3000/fotos',form.value, this.httpOptions).subscribe();
    
  }
}
