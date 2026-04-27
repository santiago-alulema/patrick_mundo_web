import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-hero',
  imports: [],
  templateUrl: './gallery-hero.html',
  styleUrl: './gallery-hero.css',
})
export class GalleryHero {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() logo = '';
  @Input() backgroundImage = '';
}
