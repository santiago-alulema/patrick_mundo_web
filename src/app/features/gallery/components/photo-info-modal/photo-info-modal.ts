import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GalleryPhoto } from '../../models/GalleryAlbum';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-photo-info-modal',
  imports: [CurrencyPipe],
  templateUrl: './photo-info-modal.html',
  styleUrl: './photo-info-modal.css',
})
export class PhotoInfoModal {
  @Input() photo: GalleryPhoto | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() buy = new EventEmitter<GalleryPhoto>();
  onClose(): void {
    this.close.emit();
  }

  onBuy(): void {
    if (!this.photo) return;
    this.buy.emit(this.photo);
  }
}
