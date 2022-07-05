import { Injectable } from '@angular/core';
import { Pokemon } from '../model/Pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';


@Injectable(
  // Injecte dans toute l'application
  // providedIn: 'root',

  // Pour injecter uniquement dans le module Pokémon
  // => providers [PokemonService] dans le pokemon.module.ts
)


export class PokemonService {

  constructor (private http: HttpClient){}

  getPokemonsList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(

      tap (response => this.log(response)),
      catchError(error => this.handleError(error, []))
    )
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(

      tap (response => this.log(response)),
      catchError(error => this.handleError(error, undefined))
    )
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

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return this.http.put('api/pokemons', pokemon, options).pipe(

      tap(response => this.log(response)),
      catchError(error => this.handleError(error, null))
    )
  }

  deletePokemonById(id: number) : Observable<null> {
    return this.http.delete(`api/pokemons/${id}`).pipe(

      tap(response => this.log(response)),
      catchError(error => this.handleError(error, null))
    )
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return this.http.post<Pokemon>('api/pokemons', pokemon, options).pipe(

      tap(response => this.log(response)),
      catchError(error => this.handleError(error, null))
    )
  }

  searchPokemons(term: string): Observable<Pokemon[]> {

    if (term.length < 2) return of([]);

    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(

      tap(response => this.log(response)),
      catchError(error => this.handleError(error, []))
    )
  }

  private log (response: any) {
    console.table(response)
  }

  private handleError (error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
