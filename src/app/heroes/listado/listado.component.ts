import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[]=['Spiderman','Ironman','Hulk']
  heroesBorrados: string[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(i:number){
    this.heroesBorrados.push(this.heroes[i])
    this.heroes.splice(i,1)
  }

}
