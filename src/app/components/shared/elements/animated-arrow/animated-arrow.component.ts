import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-arrow',
  templateUrl: './animated-arrow.component.html',
  styleUrls: ['./animated-arrow.component.css'],
})
export class AnimatedArrowComponent {
  @Input() link = '#';
  @Input() color = '#ffffff';
}
