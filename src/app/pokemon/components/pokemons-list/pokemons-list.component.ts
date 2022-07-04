import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../model/Pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})


export class PokemonsListComponent implements OnInit {

  public listPokemons: Pokemon[];
  public pokemonSelected: Pokemon | undefined;
  
  constructor (
    private router: Router, 
    private pokemonService: PokemonService 
  ) {}
    
  ngOnInit() {
    this.listPokemons = this.pokemonService.getPokemonsList();
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.listPokemons[+pokemonId-1]

    if (pokemon) this.pokemonSelected = pokemon;
    else this.pokemonSelected = undefined 
  }

  goToPokemon(id: number) {
    this.router.navigate(['/pokemon', id]);
  }
}
