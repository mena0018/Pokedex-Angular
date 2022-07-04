import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColorPipe } from './pipe/pokemon-type-color.pipe';

import { PokemonService,
        InMemoryDataService 
} from './services';

import { PokemonsListComponent, 
         PokemonDetailComponent,
         PokemonFormComponent,
         PokemonEditComponent,
         PokemonAddComponent,
         PokemonSearchComponent
} from './components';



const pokemonRoutes: Routes = [
  { path: "edit/pokemon/:id",component: PokemonEditComponent},
  { path: "pokemon/add",component: PokemonAddComponent},
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
    PokemonAddComponent,
    PokemonSearchComponent,
  ],
  imports: [
    // Importer de base => (ngIf/ngFor)
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService, InMemoryDataService],
})
export class PokemonModule {}
