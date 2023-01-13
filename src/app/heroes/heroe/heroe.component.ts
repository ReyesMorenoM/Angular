import { Component } from '@angular/core';


// agregamos el componente
@Component({
    selector: 'app-heroe',
    templateUrl:  'heroe.component.html' 
})

export class heroeComponent{

    nombre: String = "Ironman";
    edad: number = 34;

    // cramos un propiedad capitalizadp
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }
    
    cambiarNombre(): void{
        this.nombre = 'Spiderman'
    }

    cambiarEdad(): void{

        this.edad = 35;
    }

}
