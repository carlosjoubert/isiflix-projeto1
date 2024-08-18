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
> npm install **"nome do projeto"**

### Iniciar uma aplicação Angular

> [!TIP] 
> npm install serve -o

## Componentes

Em `app.routes.ts`, na `const routes`, criar objetos com 2 atributos:

* **Path:** indica a rota do endereço URL.
* **Component:** especifica o compoente que será renderizado.

```typescript
export const routes: Routes = [
    {path: '', component: ConteudoComponent},
    {path: 'link1', component: Componente1Component},
    {path: 'link2', component: Componente2Component},
    {path: 'link3', component: Componente3Component},
    {path: 'custom/:id', component: RotacustomComponent}
];
```

No `app.component.html` trocar o componente que se quer renderizar por

* `<router-outlet></router-outlet>`

```html
<app-cabecalho></app-cabecalho> // renderiza o cabeçalho
<router-outlet></router-outlet> // renderiza o body (tag que foi trocada)
<app-rodape></app-rodape> // renderiza o rodapé
```

## Links

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

## Interpolação, Event e Property Binding

### Interpolação

Permite mostrar uma variável no HTML.

* Sintaxe `{{nome da variável}}`

```html
<h1>Conteúdo. Mensagem ={{mensagem}}</h1>
```

### Event binding

Event binding é associação de eventos. Usamos esse recurso para vincular um Código da aplicação a um certo evento disparado pelo navegador.

* Sintaxe: `(tido do evento)= "método chamado"`.

```typescript
<button (click)="incrementa()" >Muda valor</button>
```

### Property Binding

O **property binding** é uma forma de associar propriedades entre o `template` (arquivo html) e o `component` (arquivo typescript). Essa associação pode ser feita utilizando a sintaxe dos colchetes ou das chaves duplas (interpolação).

```html
<a routerLink='/link1'[queryParams]="{p1:'abc', p2:'xuas'}">Link1</a>
```

> [!CAUTION]
> * Usar `Interpolação` quando for colocar a variavel no corpo (texto interno)de uma TAG.
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


