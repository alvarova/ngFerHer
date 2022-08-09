import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  
})
export class CuentaComponent implements OnInit {
  valor: number = 10;
  constructor() { }

  ngOnInit(): void {
    
  }

  aumenta(): void {
    this.valor++;
  }
  baja(): void {
    this.valor--;
  }

}
