import {NgModule} from '@angular/core';

import { contadorComponent } from './contador.component';

// Crear modulo 
@NgModule({

    declarations:[
        contadorComponent
    ],
    exports:[
        contadorComponent
    ]
})

// Creamos la clase que vamos a importar en el modulo
export class ContadorModule{}