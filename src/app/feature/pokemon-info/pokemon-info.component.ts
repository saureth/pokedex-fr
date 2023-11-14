import { Component } from '@angular/core';
import { HttpsService } from 'src/app/core/service-template/https.service';
import { Pokemon } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent {

  currPokemon: Pokemon = new Pokemon(
    "NUMERICVAL",
    "NUMERICVAL",
    "STRINGVAL",
    "STRINGVAL",
    "NUMERICVAL",
    "NUMERICVAL",
    ""
  );

  constructor(private pokeService: HttpsService){}

  ngOnInit(){
    this.getPokemon();
  }

  getPokemon(idOrName?: string){
    this.pokeService.getPokemon(idOrName)
      .subscribe(pokemon => {
        this.setCurrentPokemon(pokemon);
      });
  }

  setCurrentPokemon (pokemon: any){
    console.log(pokemon);
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
