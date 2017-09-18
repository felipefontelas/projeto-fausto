import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-receitas-lista',
  templateUrl: './receitas-lista.component.html',
  styleUrls: ['./receitas-lista.component.css']
})
export class ReceitasListaComponent implements OnInit {

  private titulo = 'Lista de receitas'
  private receitas
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/receitas')
      .subscribe(dados => this.receitas = dados)
  }

  ngOnInit() {
    
  }

}
