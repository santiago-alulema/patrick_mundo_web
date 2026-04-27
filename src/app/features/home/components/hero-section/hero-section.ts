import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() buttonText = '';
  @Input() backgroundImage = '';
  @Input() logo = '';

  @Output() ctaClick = new EventEmitter<void>();
}