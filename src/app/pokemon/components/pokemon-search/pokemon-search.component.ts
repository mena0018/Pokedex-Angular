import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { Pokemon } from '../../model/Pokemon';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})


export class PokemonSearchComponent implements OnInit {

  /**
   * Tableau de chaîne de caractères contenant les recherches de l'utilisateur
   * Flux de données dans le temps avec les recherches de l'utilisateur
   * Subject = Observable mais pilotable => on peut faire + que juste subscribe() 
   * {...pokemonsList(<saisie>....pokemonsList(<seconde saisie>)...}
   */
  public searchTerms = new Subject<string>();
  public pokemonsList: Observable<Pokemon[]>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    // Pas besoin de faire cette liaison grâce au pipe async coté template ligne 11
    // this.pokemonService.getPokemonsList().subscribe(pokemons => this.pokemonsList = pokemons);

    this.pokemonsList = this.searchTerms.pipe(
      // ..."a"."ab"..."abz"."ab"..."abc"...}

      // Supprime les termes non intéressants car modifier avant 300ms
      debounceTime(300),
      // {..."ab"..."ab"..."abc"...}
      
      // Effectue une recherche uniquement si le terme de recherche change
      distinctUntilChanged(),
      // {..."ab"......"abc".....}

      // Annule la dernière recherche déjà en cours et effectue la plus récente
      switchMap((term) => this.pokemonService.searchPokemons(term)),
      // {...searchPokemons(ab)......"searchPokemons(abc)....}
    )
  }

  search(term: string) {
    /**
     * Pousse le terme de recherche dans le flux de données Subject
     * Equivalent de push mais avec un flux de données
     */
    this.searchTerms.next(term);
  }

  goToDetailPokemon(id: number) {
    this.router.navigate(['/pokemon', id])
  }
}
