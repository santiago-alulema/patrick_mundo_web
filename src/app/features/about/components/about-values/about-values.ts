import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-values',
  imports: [],
  standalone: true,
  templateUrl: './about-values.html',
  styleUrl: './about-values.css',
})
export class AboutValues {
  @Input() items: { title: string; description: string }[] = [];
}
