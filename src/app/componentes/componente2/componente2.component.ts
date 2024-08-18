import { Component, OnInit } from '@angular/core';
import { PostService } from '../../servicos/post.service';
import { Post } from '../../Model/Post';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component implements OnInit {
  
  public lista: Post[];
  public loading: boolean;

  public constructor(private service: PostService){
    this.lista = [];
    this.loading = false;
  }

  public ngOnInit(): void {
    this.loading = true;

    this.service.consumirPosts().subscribe({
      next: (res: Post[])=>{
        console.log("Sucesso!");
        this.lista = res;
        this.loading=false;
      },
      error: (err: any)=>{
        console.log("ERROR do programa!");
        console.log(err);
        this.loading=false;
      }
    });
  }

  public enviarDados(): void{
    let postagem: Post = new Post();
    postagem.body="Teste do Carlos dasd aserd sd";
    postagem.title="Teste Carlos";
    postagem.userId=1;

    this.service.adicionarPost(postagem).subscribe({
      next: (res: Post)=>{
        console.log("Sucesso!");
        console.log(res);
      },
      error: (err: any)=>{
        console.log("ERROR ao adicionar postagem!");
        console.log(err);
      }
    });

  }

}
