import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  imports: [],
  standalone: true,
  templateUrl: './about-hero.html',
  styleUrl: './about-hero.css',
})
export class AboutHero {
  @Input() title = '';
  @Input() subtitle = '';
}
