import { Component, Input } from '@angular/core';
import { SocialPageItem } from '../../interfaces/SocialPageItem';
import { SocialCard } from "../social-card/social-card";

@Component({
  selector: 'app-social-grid',
  imports: [SocialCard],
  templateUrl: './social-grid.html',
  styleUrl: './social-grid.css',
})
export class SocialGrid {
  @Input() items: SocialPageItem[] = [];
}
