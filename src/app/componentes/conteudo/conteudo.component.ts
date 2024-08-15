import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit {

  public mensagem:string;
  public valor:number;
  public link_foto: string;

  public constructor(){
    this.mensagem = "Olá, Mundo!";
    this.valor=0;
    this.link_foto= "https://blog.unoeste.br/wp-content/uploads/2022/08/curso-agronomia.jpg"
  }
  ngOnInit(): void {
  }

  public mudarValor(){
    this.valor++;
    this.link_foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMgTSZGZUKwX1WWh83Kv79FhvDw5wQybFqw&s"
  }

}
