import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Hulk','Spiderman','Superman','Ironman','Thor','Capitan America'];
  sale: string = "";
  constructor() { 
    
  }
  borrarHeroe(): void {
    let sale2=this.heroes.splice(0,1);
    this.sale = sale2.toString();
    console.log(this.sale);
  }
  ngOnInit(): void {
  }

}
