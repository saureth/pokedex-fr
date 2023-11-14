import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() relatedUrls = {
    one: "",
    two: "",
    three: "",
    four: ""
  };
  default: string = "assets/pokeball.png";

}
