import { Component, Input } from '@angular/core';
import { FeatureHighlightMock } from '../models/component-interface';

@Component({
  selector: 'app-feature-highlight',
  imports: [],
  templateUrl: './feature-highlight.html',
  styleUrl: './feature-highlight.css',
})
export class FeatureHighlight {
  @Input() data!: FeatureHighlightMock;
}
