import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../model/Pokemon';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})


export class PokemonDetailComponent implements OnInit {

  public pokemonsList : Pokemon[];
  public pokemonSelected: Pokemon|undefined;

  constructor (
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId : number|null = Number(this.route.snapshot.paramMap.get('id'));

    if (pokemonId) {
      this.pokemonSelected = this.pokemonService.getPokemonById(pokemonId);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(id: number) {
    this.router.navigate(['/edit/pokemon', id]);
  }
}
