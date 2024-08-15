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
    this.link_foto= "../../../../public/agronomia_logotipo.png"
  }
  ngOnInit(): void {
  }

  public mudarValor(){
    this.valor++;
  }

}
