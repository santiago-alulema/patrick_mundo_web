import { Component, Input } from '@angular/core';
import { SocialLink } from '../../interfaces/SocialLink';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Input() brand = 'EXPLORE';
  @Input() description =
    'Private tours, road trips and unforgettable experiences across Ecuador.';
  @Input() address = 'Cuenca, Ecuador';
  @Input() email = 'info@example.com';
  @Input() phone = '+593 999 999 999';
  @Input() socials: SocialLink[] = [];
  @Input() copyright = '© 2026 Explore. All rights reserved.';
}