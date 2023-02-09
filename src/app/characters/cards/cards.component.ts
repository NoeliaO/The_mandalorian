import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() name:string=""
  @Input() actor:string=""
  @Input() role:string=""
  @Input() image_url:string=""
}
