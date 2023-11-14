import { Component, Input } from '@angular/core';
import { HttpsService } from 'src/app/core/service-template/https.service';
import { Pokemon } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent {
  @Input() currPokemon: Pokemon = new Pokemon();

}
