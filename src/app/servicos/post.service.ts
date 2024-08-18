import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  //métodos de consumo da API
  public consumirPosts(): Observable<Post[]>{
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  public adicionarPost(postagem:Post):Observable<Post>{
    return this.http.post<Post>("https://jsonplaceholder.typicode.com/posts", postagem)
  }

}
