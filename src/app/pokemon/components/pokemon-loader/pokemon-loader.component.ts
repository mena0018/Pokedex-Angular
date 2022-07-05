import { Component } from '@angular/core';


@Component({
  selector: 'app-pokemon-loader',
  styleUrls: ['./pokemon-loader.component.scss'],
  template: `
          <div class="loader-container">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
          </div>`
})

export class PokemonLoaderComponent {}
