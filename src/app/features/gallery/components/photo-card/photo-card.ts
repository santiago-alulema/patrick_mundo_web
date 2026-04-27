import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryPhoto } from '../../models/GalleryAlbum';

@Component({
  selector: 'app-photo-card',
  imports: [],
  standalone: true,
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.css',
})
export class PhotoCard {
  @Input() photo!: GalleryPhoto;
  @Output() photoClick = new EventEmitter<GalleryPhoto>();

  onOpen(): void {
    this.photoClick.emit(this.photo);
  }
}
