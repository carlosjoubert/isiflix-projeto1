import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent implements OnInit {
  
  @Input() public valorFilho: number = 0;
  @Output() public eventoFilho: EventEmitter<number> = new EventEmitter<number>();

  public outroValor: number=0;
  
  public ngOnInit(): void {
    
  }
  
  public mudaValorFilho(): void{
    this.outroValor+=10;
    this.eventoFilho.emit(this.outroValor);
  }

}
