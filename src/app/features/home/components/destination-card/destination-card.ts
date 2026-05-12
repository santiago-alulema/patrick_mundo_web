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

  openWhatsApp(): void {
    const phone = '593990014703'; // sin +
    const message = `Hi Patrick! I'm interested in visiting "${this.item.title}" and would like more information.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }
}

