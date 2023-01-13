// importar y vamos extraer el componente nadamas
import {Component} from '@angular/core';

// creamos un componente
@Component({
    selector: 'app-contador',// ingresamos el selector y le colocamos app para saber que nosotros o hicimos
    // agregamos el template y adentro agregamos el codigo de HTML
    template:`
    
    <h1>Contador App</h1>
    <h1>La base es:  {{numero}}</h1><!--Mostrar el nombre del proyecto-->
    
    <br><br>
    
    <!--agregar un evento al boton con JS y aumentando 1 y restando 1-->
    <h3>Sin metodos</h3>
    <button (click)="numero = numero+1; "> +1 </button>
    <span>{{numero}}</span>
    <button (click)="numero = numero-1"> -1 </button>
    <br><br>
    
    <!--Ingresando incremento decremento pero com metodos no acepta parametros-->
    <h3>Com metodo</h3>
    <button (click)="sumar()"> +1</button>
    <span>{{numero}}</span>
    <button (click)="restar()"> -1</button>
    <br><br>
    
    
    <!--Ingresando incremento de 5 en 5-->
    <h3>Sumando en 5 metodo con parametros</h3>
    <button (click)="acumular(base)">+5</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-(base))">-5</button>
    `

})

// agregamos EXPORT porque lo vamos utilizar en otras clases
export class contadorComponent{
    // estos ingresamos
    titulo: String = 'bases';
    numero: number = 10;

    // creacion de un metodo
    sumar(){
        this.numero += 1;
    }

    restar(){
        this.numero -= 1;
    }

    // creacion de metodo con retorno
    base: number = 5;
    acumular(valor: number){
        this.numero += this.base;
    }
}