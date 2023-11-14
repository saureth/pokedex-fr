import { Component } from '@angular/core';
import { HttpsService } from 'src/app/core/service-template/https.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent {

  constructor(private pokeService: HttpsService){}

  getPokemon(idOrName?: string){
    this.pokeService.getPokemon(idOrName)
      .subscribe(pokemon => {
        console.log(pokemon);
      });
  }

}
