import { Component, Input } from '@angular/core';
import { SocialPageItem } from '../../interfaces/SocialPageItem';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-social-card',
  imports: [NgClass],
  templateUrl: './social-card.html',
  styleUrl: './social-card.css',
})
export class SocialCard {
  @Input() item!: SocialPageItem;
}
