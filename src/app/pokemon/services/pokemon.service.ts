import { Injectable } from '@angular/core';
import { Pokemon } from '../model/Pokemon';
import { POKEMONS } from '../mock/mock-pokemon-list';


@Injectable(
  // Injecte dans toute l'application => les 3 méthodes seront disponible partout
  // providedIn: 'root',

  // Pour injecter uniquement dans le module Pokémon
  // => providers [PokemonService] dans le pokemon.module.ts
)


export class PokemonService {
  getPokemonsList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id === id);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
      'Poison'
    ];
  }
}
