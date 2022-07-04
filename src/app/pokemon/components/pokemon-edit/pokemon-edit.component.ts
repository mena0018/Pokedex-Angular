import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../model/Pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html'
})


export class PokemonEditComponent implements OnInit {
  public pokemon: Pokemon | undefined;

  constructor (
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: number = Number(this.route.snapshot.paramMap.get('id'));

    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined
    }
  }
}
