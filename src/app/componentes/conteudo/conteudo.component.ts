import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit {

  public mensagem:string;
  public valor:number;
  public link_foto: string;
  public textoForm: string;
  public senha: string;
  public clicado: boolean;

  public constructor(){
    this.mensagem = "Olá, Mundo!";
    this.valor=0;
    this.link_foto= "../../../../public/agronomia_logotipo.png"
    this.textoForm="";
    this.senha="";
    this.clicado=false;
  }
  ngOnInit(): void {
  }

  public mudarValor(){
    this.valor++;
  }

  public enviarDados(){
    console.log(this.textoForm + "/" + this.senha + "/" + this.clicado);
  }

}
