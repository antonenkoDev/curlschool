import { Component, Input } from '@angular/core';
import { Slide } from '../../../../models/slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() slides: Slide[] = [];
}
