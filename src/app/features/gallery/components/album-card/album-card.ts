import { Component, Input } from '@angular/core';
import { GalleryAlbum } from '../../models/gallry.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-card',
  imports: [RouterLink],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css',
})
export class AlbumCard {
  @Input() album!: GalleryAlbum;
}
