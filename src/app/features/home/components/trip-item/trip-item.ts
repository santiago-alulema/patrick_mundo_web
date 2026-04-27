import { Component, Input } from '@angular/core';
import { PopularTripMock } from '../models/component-interface';

@Component({
  selector: 'app-trip-item',
  imports: [],
  templateUrl: './trip-item.html',
  styleUrl: './trip-item.css',
})
export class TripItem {
  @Input() item!: PopularTripMock;
}
