import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RodapeComponent, ConteudoComponent, CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Isiflix';
}
