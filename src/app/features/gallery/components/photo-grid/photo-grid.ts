import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryPhoto } from '../../models/GalleryAlbum';
import { PhotoCard } from "../photo-card/photo-card";

@Component({
  selector: 'app-photo-grid',
  imports: [PhotoCard],
  standalone: true,
  templateUrl: './photo-grid.html',
  styleUrl: './photo-grid.css',
})
export class PhotoGrid {
  @Input() photos: GalleryPhoto[] = [];
  @Output() photoSelected = new EventEmitter<GalleryPhoto>();

  onSelect(photo: GalleryPhoto): void {
    this.photoSelected.emit(photo);
  }
}
