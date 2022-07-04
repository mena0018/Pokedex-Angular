import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../model/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.components.scss']
})


export class PokemonFormComponent implements OnInit {
  @Input() pokemon : Pokemon;

  public types : string [];

  constructor(
    private pokemonService: PokemonService,
    private router: Router ) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType (type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType (event: Event, type: string) {
    const isChecked: boolean = (event.target as HTMLInputElement)['checked'];
    const index: number = this.pokemon.types.indexOf(type);

    isChecked ? this.pokemon.types.push(type) : this.pokemon.types.splice(index, 1);
  }

  isTypesValid (type: string): boolean {
    // Si l'utilisateur à qu'un seul type de sélectionner alors on désactive le seul type pour ne pas tomber à 0 type
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    // Si l'utilisateur à déjà sélectionner plus de 2 cases alors on désactive toutes les cases sauf celles sélectionnées pour pouvoir les désélectionner
    if (this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }
    
    return true
  }

  onSubmit() {
    this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]))
  }
}
