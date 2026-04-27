import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gallery-toolbar',
  imports: [],
  templateUrl: './gallery-toolbar.html',
  styleUrl: './gallery-toolbar.css',
})
export class GalleryToolbar {
  @Input() title = '';
  @Input() subtitle = '';

  @Output() searchChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }
}
