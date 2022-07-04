import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipe/pokemon-type-color.pipe';
import { PokemonService } from './services/pokemon.service';

import { PokemonsListComponent, 
         PokemonDetailComponent,
         PokemonFormComponent,
         PokemonEditComponent
} from './components';



const pokemonRoutes: Routes = [
  { path: "edit/pokemon/:id",component: PokemonEditComponent},
  { path: "pokemon/:id",component: PokemonDetailComponent},
  { path: "pokemons", component: PokemonsListComponent}
];


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonsListComponent,
    PokemonDetailComponent,
    PokemonFormComponent,
    PokemonEditComponent,
  ],
  imports: [
    // Importer de base => (ngIf/ngFor)
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService],
})
export class PokemonModule {}
