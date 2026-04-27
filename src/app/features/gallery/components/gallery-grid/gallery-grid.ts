import { Component, Input } from '@angular/core';
import { GalleryAlbum } from '../../models/gallry.interface';
import { AlbumCard } from "../album-card/album-card";

@Component({
  selector: 'app-gallery-grid',
  imports: [AlbumCard],
  templateUrl: './gallery-grid.html',
  styleUrl: './gallery-grid.css',
})
export class GalleryGrid {
  @Input() albums: GalleryAlbum[] = [];
}
