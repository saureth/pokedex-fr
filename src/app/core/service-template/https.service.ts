import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  POKEMON_ENV = "https://pokeapi.co/api/v2/pokemon/";
  DEFAULT_PKM = "charizard";
  related: any = {};

  constructor(private http: HttpClient) { }

  getPokemon (base: string = this.POKEMON_ENV, pokemon: string = this.DEFAULT_PKM) {
    let finalUrl = base.concat(pokemon);
    return this.http.get(finalUrl);
  }

  forkPokemon(base: string = this.POKEMON_ENV, pokemons: any){
    forkJoin([
      this.getPokemon(base,pokemons.one),
      this.getPokemon(base,pokemons.two),
      this.getPokemon(base,pokemons.three),
      this.getPokemon(base,pokemons.four)
    ]).subscribe({
      next: (results) => {
        this.related = {
          one: results[0],
          two: results[1],
          three: results[2],
          four: results[3]
        };
      }
    })
  }

}
