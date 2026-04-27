import { Component, Input } from '@angular/core';
import { DestinationCardMock } from '../models/component-interface';
import { DestinationCard } from "../destination-card/destination-card";
import { SectionTitle } from "../section-title/section-title";

@Component({
  selector: 'app-destinations-section',
  imports: [DestinationCard, SectionTitle],
  templateUrl: './destinations-section.html',
  styleUrl: './destinations-section.css',
})
export class DestinationsSection {
  @Input() title = '';
  @Input() items: DestinationCardMock[] = [];
}
