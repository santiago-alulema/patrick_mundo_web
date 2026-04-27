import { Component, Input } from '@angular/core';
import { Review } from '../models/component-interface';
import { ReviewCard } from "../review-card/review-card";
import { SectionTitle } from "../section-title/section-title";

@Component({
  selector: 'app-reviews-section',
  imports: [ReviewCard, SectionTitle],
  templateUrl: './reviews-section.html',
  styleUrl: './reviews-section.css',
})
export class ReviewsSection {
  @Input() title = '';
  @Input() items: Review[] = [];
}
