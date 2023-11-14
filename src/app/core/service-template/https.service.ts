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

  getPokemon (pokemon: string = this.DEFAULT_PKM) {
    let finalUrl = this.POKEMON_ENV.concat(pokemon);
    return this.http.get(finalUrl);
  }

  forkPokemon(pokemons: any){
    return forkJoin([
      this.getPokemon(pokemons.one),
      this.getPokemon(pokemons.two),
      this.getPokemon(pokemons.three),
      this.getPokemon(pokemons.four)
    ]);
  }

}
