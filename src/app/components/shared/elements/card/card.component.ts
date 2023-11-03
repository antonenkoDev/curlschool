import { Component, Input } from '@angular/core';
import { convertEuroToUah } from '../../../../helpers/convert-euro-to-uah';
import { Card } from '../../../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cards: Card[] = [];
  protected readonly convertEuroToUah = convertEuroToUah;
}
