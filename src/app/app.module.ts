import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PageNotFoundComponent} from './pokemon/components';
import { PokemonModule } from './pokemon/pokemon.module';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './pokemon/services/in-memory-data.service';


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
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
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
