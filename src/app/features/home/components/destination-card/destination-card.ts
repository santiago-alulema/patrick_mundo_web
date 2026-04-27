import { Component, Input } from '@angular/core';
import { DestinationCardMock } from '../models/component-interface';

@Component({
  selector: 'app-destination-card',
  imports: [],
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.css',
})
export class DestinationCard {
  @Input() item!: DestinationCardMock;
}
