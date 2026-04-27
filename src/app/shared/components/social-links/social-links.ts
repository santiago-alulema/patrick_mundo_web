import { Component, Input } from '@angular/core';
import { SocialLink } from '../../interfaces/SocialLink';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {
  @Input() title = 'Follow me';
  @Input() items: SocialLink[] = [];
}
