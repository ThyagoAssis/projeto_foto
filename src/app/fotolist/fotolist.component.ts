import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fotos } from '../model/foto.model';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})

/* 
  OnInit 
    -Faz parte do clico de vida do angular 
    -Tudo que estiver dentro dele será executado automaticamente quando o componente for inciado
    - Ele precisa ser implementado - Declarar na classe    
*/
export class FotolistComponent implements OnInit {
  
  /* Meu array de fotos */
  minhasFotos:Fotos[] = [];

  /* Injeção da dependencia do httpclient 
    é uma boa pratica do Angular deixar o construtor somente para injeção de dependecia
  */
  constructor(private http: HttpClient){}
  
  /* Método responsavel por carregar tudo dentro dele na inicialização do componente */
  ngOnInit(): void {
    this.http.get<Fotos[]>('http://localhost:3000/fotos').subscribe(caixinha => this.minhasFotos = caixinha );
  }
}
