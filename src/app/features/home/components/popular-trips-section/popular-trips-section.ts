import { Component, Input } from '@angular/core';
import { PopularTripMock } from '../models/component-interface';
import { TripItem } from "../trip-item/trip-item";
import { SectionTitle } from "../section-title/section-title";

@Component({
  selector: 'app-popular-trips-section',
  imports: [TripItem, SectionTitle],
  templateUrl: './popular-trips-section.html',
  styleUrl: './popular-trips-section.css',
})
export class PopularTripsSection {
  @Input() title = '';
  @Input() items: PopularTripMock[] = [];
}
