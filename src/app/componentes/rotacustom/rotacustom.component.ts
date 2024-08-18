import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rotacustom',
  standalone: true,
  imports: [],
  templateUrl: './rotacustom.component.html',
  styleUrl: './rotacustom.component.css'
})
export class RotacustomComponent implements OnInit {

  public idREcebido: string = "";
  public constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  public ngOnInit(): void {
    this.idREcebido = this.activatedRoute.snapshot.params['id'];
    console.log("Ide recebido na rota = " + this.idREcebido)
  }

  public navegar(): void {
    this.router.navigate(['/'])
  }

}
