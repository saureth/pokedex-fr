import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  POKEMON_ENV = "https://pokeapi.co/api/v2/pokemon/";
  DEFAULT_PKM = "charizard";

  constructor(private http: HttpClient) { }

  getPokemon (base: string = this.POKEMON_ENV, pokemon: string = this.DEFAULT_PKM) {
    let finalUrl = base.concat(pokemon);
    return this.http.get(finalUrl);
  }

}
