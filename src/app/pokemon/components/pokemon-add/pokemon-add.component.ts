import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../model/Pokemon';


@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
})


export class PokemonAddComponent implements OnInit {

  public pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
