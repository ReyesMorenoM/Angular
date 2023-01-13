import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { heroeComponent } from './heroe.component';
import { listadoComponent } from '../listado/listado.component';

// creamos el modulo donde vamos agrupar los modulos
@NgModule({

    // Agrupamos los modulos
    declarations:[
        heroeComponent,
        listadoComponent
    ],

    // Mostras solo estos componentes
    exports:[
        listadoComponent,
    ],

    // importamos el modulo 
    imports: [
        CommonModule
    ]
})

export class HeroesModule{}
