import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [NgClass],
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
})
export class SectionTitle {
  @Input() title = '';
  @Input() light = false;
}
