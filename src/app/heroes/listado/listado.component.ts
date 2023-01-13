import { Component} from "@angular/core";  

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'
})

export class listadoComponent {
    
    //edad: number = 34;
    heroes: String[] = ['Paco', 'Juan', 'Perez', 'Gonzalez'];
    heroeBorrado: String = ''; 
    
    // Borrar heroe 
    borrarHeroe(){

        this.heroeBorrado = this.heroes.shift() || '';
    }
}