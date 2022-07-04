import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent} from './pokemon/components';
import { PokemonModule } from './pokemon/pokemon.module';


@NgModule({
  // Tous ce qu'a besoin ce module pour fonctionner
  // (Composants, Directives et Pipes)
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  // Classes nécessaires pour le bon fonctionnement du module
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    // AppRouting doit charger après le module Pokémon pour éviter d'avoir le routing qui renvoie uniquement des 404
    AppRoutingModule
  ],
  // Permet de fournir un service au module
  providers: [],
  // Composant qui sera lancé au démarrage de l'application
  bootstrap: [AppComponent]
})
export class AppModule { }
