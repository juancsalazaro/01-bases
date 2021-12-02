import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{title}}</h1>
    <h3><strong>La base es: {{base}}</strong></h3> <br>
    <button (click)="menos5()" >-</button>
    <span>{{numero}}</span>
    <button (click)="mas5()" >+</button>
    `
})
export class contadorComponent{

    title = 'Contador App';
    numero:number=0
    base=5

    acumular(valor:number){
        this.numero+=valor;
    }

    menos5(){
        this.numero-=5
    }

    mas5(){
        this.numero+=5
    }
}