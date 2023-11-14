import { Component } from '@angular/core';
import { HttpsService } from 'src/app/core/service-template/https.service';
import { Pokemon } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {

  currPokemon: Pokemon = new Pokemon();
  constructor(private pokeService: HttpsService){}

  ngOnInit(){
    this.getPokemon();
  }

  getPokemon(idOrName?: string){
    this.pokeService.getPokemon(idOrName)
      .subscribe(pokemon => {
        console.log(pokemon);
        this.setCurrentPokemon(pokemon);
      });
  }

  setCurrentPokemon (pokemon: any){
    this.currPokemon = new Pokemon(
      pokemon.name.toUpperCase(),
      pokemon.id,
      pokemon.types[0].type.name.toUpperCase(),
      pokemon.abilities[0].ability.name.toUpperCase(),
      pokemon.height,
      pokemon.weight,
      pokemon.sprites["front_default"]
    );
  }
}
