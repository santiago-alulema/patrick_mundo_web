import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-intro',
  imports: [],
  standalone: true,
  templateUrl: './about-intro.html',
  styleUrl: './about-intro.css',
})
export class AboutIntro {
  @Input() data!: {
    name: string;
    role: string;
    image: string;
    description1: string;
    description2: string;
    description3: string;
    cta: string;
  };

  openWhatsApp(): void {
    const phone = '593990014703';
    const message = 'Hello, I would like more information.';

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }
}
