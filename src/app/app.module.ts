import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroe/heroes.module';
import { ContadorModule } from './Contador/contador/Contador.module';
// este NgModule es el decorador

@NgModule({
  declarations: [

    // agregar el component
    AppComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule, // agregamos el modulo de Heroes
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent] // este es el modulo principal
})

export class AppModule { }
