import { Component, Input } from '@angular/core';
import { Review } from '../models/component-interface';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.html',
  styleUrl: './review-card.css',
})
export class ReviewCard {
  @Input() item!: Review;

  get stars(): number[] {
    return Array(this.item.rating).fill(0);
  }
}
