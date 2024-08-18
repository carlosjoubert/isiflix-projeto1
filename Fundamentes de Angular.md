# Fundamentos de Angular - ISIFLIX

O Angular é um framework desenvi=olvido para fazer Single Page Application (SPA).
As SPA são fragmentadas em seções **(componentes)**.
Para cada componente da página o Angular cria 4 arquivos:

* HTML
* CSS
* TS (Typescript)
* Teste

## Instalando o Angular

* Instalar o NODEJS.
* Instalar o Angular.

> [!TIP] 
> **npm install -g @angular/cli**

* O Angular funciona a partir do prefixo **ng**.

> [!TIP]
> **ng new** \
> Cria um novo projeto Angular.

## Estrutura do projeto

### Criar projeto

> [!TIP]
> npm install **"nome do projeto"**\
> Exemplo: npm install projeto1

Os arquivos dentro da pasta `App`

* `app.component.css`
* `app.component.html`
* `app.component.spec.ts`
* `app.component.ts`

são responsáveis pela renderização da página principal.

> [!WARNING]
> A partir da versão 18 do Angular não existe mais o arquivo `app.module.ts` e `app-routing.module.ts`\
> Os componetes, bem como as rotas, devem ser importados/configurados diretamente para o arquivo `.ts` de cada componente.



### Iniciar uma aplicação Angular

> [!TIP]
> npm install serve -o

* O comando `ng serve` inicia o servidor do Angular.
* O parâmetro `-o` abre o projeto no navegador.

## Componentes

### Criando componentes

O Angular cria componentes em pastas dentro da pasta `App`. Para melhor organização pode fazer uma subpasta `Componentes`.

> [!TIP]
> `ng ng generate(g) component(c) componentes/cabecalho` ou\
> `ng g c componentes/cabecalho`

* **componetes** = subpasta.
* **cabecalho** = nome do componente.

> [!NOTE]
> São criados os arquivos
>
> * `cabecalho.component.css`
> * `cabecalho.component.html`
> * `cabecalho.component.spec.ts`
> * `cabecalho.component.ts`

No ``app.component.html` referenciar os componentes que deseja redenrizar, através das respectivas TAGs.

```html
<app-cabecalho></app-cabecalho>
<router-outlet></router-outlet>
<app-rodape></app-rodape>
```

```typescript
Arquivo: **`app.routes.ts`**

import { Routes } from '@angular/router';
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente3Component } from './componentes/componente3/componente3.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { RotacustomComponent } from './componentes/rotacustom/rotacustom.component';

export const routes: Routes = [
    {path: '', component: ConteudoComponent},
    {path: 'link1', component: Componente1Component},
    {path: 'link2', component: Componente2Component},
    {path: 'link3', component: Componente3Component},
    {path: 'custom/:id', component: RotacustomComponent}
];
```

### Criando as rotas dos componentes

Em `app.routes.ts`, na `const routes`, criar objetos com 2 atributos:

* **Path:** indica a rota do endereço URL.
* **Component:** especifica o compoente que será renderizado.

```typescript
export const routes: Routes = [
    {path: '', component: ConteudoComponent},
    {path: 'link1', component: Componente1Component},
    {path: 'link2', component: Componente2Component},
    {path: 'link3', component: Componente3Component},
];
```

## Links

### Atribuindo rotas à TAG de link `<a>`

Para que as rotas funcione deve-se substituir o parâmentro `href` por `routerLink`.

A tag link (`<a>`) deve ficar assim:

```html
<a routerLink="/">Cabecalho</a>
```

* O atributo **routerLink** especifica a rota para o componente desejado.

> [!IMPORTANT]
> O **routerLink** deve ser importando no arquivo `.TS` do componente.

```typescript
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent{
}
```
No `app.component.html` trocar o componente que se quer renderizar por

* `<router-outlet></router-outlet>`

O **`router-outlet`** é o ponto de centralização e consulta das URLs e os respectivos componentes associados às rotas.

```html
<app-cabecalho></app-cabecalho> // renderiza o cabeçalho
<router-outlet></router-outlet> // renderiza o body (tag que foi trocada)
<app-rodape></app-rodape> // renderiza o rodapé
```

## Interpolação, Event e Property Binding

### OnInit

O `OnInit` é o elemento do componente onde podemos trabalhar quando este componete é criado e inicializado para ser renderizado.

* A classe do componente deve **implementar** o `OnInit`

```typescript
export class ConteudoComponent implements OnInit {
  
  // ATRIBUTOS
  public mensagem:string;
  public valor:number;
  public clicado: boolean;
  
  //CONSTRUTOR
  public constructor(){
    this.mensagem = "Olá, Mundo!";
    this.valor=0;
    this.clicado=false;
  }

  // necessário para implementar o OnInit
  ngOnInit(): void {
  }
  
  //MÉTODOS
  public mudarValor(){
    this.valor++;
  }

  public enviarDados(){
    console.log(this.textoForm + "/" + this.senha + "/" + this.clicado);
  }

}
```

> [!IMPORTANT]
> A implementação do OnInit necessitar implementar o método `ngOnInit()`.

### Interpolação

Com a interpolção comseguimos renderizar uma variávl presente no `Typescript` no `HTML`. Permite mostrar uma variável no HTML.

* Sintaxe `{{nome da variável}}`

```html
<h1>Conteúdo. Mensagem ={{mensagem}}</h1>
```

### Event binding

Event binding é a associação de eventos. Usamos este recurso para vincular um código da aplicação a um certo evento disparado pelo navegador.

* Sintaxe: `(tido do evento)= "método chamado"`.

```typescript
<button (click)="incrementa()" >Mudar valor</button>
```
> [!IMPORTANT]
> O operador `()` indica que há uma comunicação do  HTML para o Typescript.\
> O que for indicado no evento do angular, ele vai procurar no Typescript se existes a declaração conrrespondente.

### Property Binding

O **property binding** é uma forma de associar propriedades entre o `template` (arquivo html) e o `component` (arquivo typescript). Essa associação pode ser feita utilizando a sintaxe dos colchetes ou das chaves duplas (interpolação).

* Ao usar o operador `[]` nos parâmetros das TAG é possível associar a um nome de variável do Typscript.

```typescript
//Arquivo: conteudo.component.ts

export class ConteudoComponent implements OnInit {
  public link_foto: string;
  public constructor(){
      this.link_foto= "../../../../public/agronomia_logotipo.png"
  }

//Arquivo: conteudo.component.html

<img [src]="link_foto" alt="foto">
```

> [!CAUTION]
>
> * Usar `Interpolação` quando for colocar a variável no corpo (texto interno) de uma TAG.
> * Usar `Propety` quando querer mudar atributos de uma TAG a partir de uma variável.

## Formulários

* importar o `FormsModule` para o arquivo `.ts` do componente.

```typescript
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
```

* Sintaxe: `[(ngModel)]="nome da variável"`.

```html
<input type="password" id="minhaSenha" [(ngModel)]="senha"><br>
```

## Typescript

Para instalar o Typescript utilizar o comando:

* `npm install typescript`

## Rotas (parte 1)


