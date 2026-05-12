import { Component, computed, OnInit, signal } from '@angular/core';
import { GalleryAlbum } from '../../features/gallery/models/gallry.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GalleryAdminService } from '../services/gallery-admin.service';

@Component({
  selector: 'app-gallery-editor-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery-editor-page.html',
  styleUrl: './gallery-editor-page.css',
})
export class GalleryEditorPage implements OnInit {
  albums = signal<GalleryAlbum[]>([]);
  selectedAlbumId = signal<number | null>(null);
  message = signal('');
  showAlbumForm = signal(false);
  uploading = signal(false);

  selectedCoverFile: File | null = null;
  uploadingCover = signal(false);

  selectedFile: File | null = null;

  newPhoto = {
    title: '',
    imageUrl: '',
    description: '',
    location: '',
    size: '4000x3000',
    price: 120
  };

  newAlbum = {
    title: '',
    country: '',
    coverImage: ''
  };

  selectedAlbum = computed(() =>
    this.albums().find(a => a.id === this.selectedAlbumId())
  );

  constructor(private galleryService: GalleryAdminService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.galleryService.getAlbums().subscribe({
      next: data => {
        this.albums.set(data);
        this.selectedAlbumId.set(data[0]?.id ?? null);
        this.message.set('Álbumes cargados desde el backend.');
      },
      error: () => {
        this.message.set('No se pudieron cargar los álbumes.');
      }
    });
  }

  selectAlbum(id: number): void {
    this.selectedAlbumId.set(id);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    this.selectedFile = input.files[0];
    this.message.set(`Imagen seleccionada: ${this.selectedFile.name}`);
  }

  uploadSelectedImage(): void {
    if (!this.selectedFile) {
      this.message.set('Selecciona una imagen primero.');
      return;
    }

    this.uploading.set(true);

    this.galleryService.uploadImage(this.selectedFile).subscribe({
      next: response => {
        this.newPhoto.imageUrl = response.imageUrl;
        this.uploading.set(false);
        this.message.set('Imagen subida correctamente.');
      },
      error: () => {
        this.uploading.set(false);
        this.message.set('No se pudo subir la imagen.');
      }
    });
  }

  addPhoto(): void {
    const albumId = this.selectedAlbumId();

    if (!albumId) return;

    if (!this.newPhoto.title.trim() || !this.newPhoto.imageUrl.trim()) {
      this.message.set('El título y la imagen son obligatorios.');
      return;
    }

    const photo = {
      title: this.newPhoto.title,
      imageUrl: this.newPhoto.imageUrl,
      description: this.newPhoto.description,
      location: this.newPhoto.location,
      size: this.newPhoto.size,
      price: Number(this.newPhoto.price),
      albumId
    };

    this.galleryService.createPhoto(photo).subscribe({
      next: () => {
        this.clearForm();
        this.loadAlbums();
        this.message.set('Foto guardada correctamente.');
      },
      error: () => {
        this.message.set('No se pudo guardar la foto.');
      }
    });
  }

  deletePhoto(photoId: number): void {
    this.galleryService.deletePhoto(photoId).subscribe({
      next: () => {
        this.loadAlbums();
        this.message.set('Foto eliminada correctamente.');
      },
      error: () => {
        this.message.set('No se pudo eliminar la foto.');
      }
    });
  }

  addAlbum(): void {
    if (!this.newAlbum.title.trim() || !this.newAlbum.country.trim()) {
      this.message.set('El título y país del álbum son obligatorios.');
      return;
    }

    const album = {
      title: this.newAlbum.title,
      country: this.newAlbum.country,
      coverImage: this.newAlbum.coverImage || 'https://via.placeholder.com/800x500?text=Nuevo+Album',
      photos: []
    };

    this.galleryService.createAlbum(album).subscribe({
      next: savedAlbum => {
        this.loadAlbums();
        this.selectedAlbumId.set(savedAlbum.id);
        this.cancelAlbumForm();
        this.message.set('Álbum guardado correctamente.');
      },
      error: () => {
        this.message.set('No se pudo guardar el álbum.');
      }
    });
  }

  clearForm(): void {
    this.newPhoto = {
      title: '',
      imageUrl: '',
      description: '',
      location: '',
      size: '4000x3000',
      price: 120
    };

    this.selectedFile = null;
  }

  toggleAlbumForm(): void {
    this.showAlbumForm.update(value => !value);
  }

  cancelAlbumForm(): void {
    this.showAlbumForm.set(false);
    this.selectedCoverFile = null;
    this.newAlbum = {
      title: '',
      country: '',
      coverImage: ''
    };
  }

  onCoverFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    this.selectedCoverFile = input.files[0];
    this.message.set(`Portada seleccionada: ${this.selectedCoverFile.name}`);
  }

  uploadSelectedCover(): void {
    if (!this.selectedCoverFile) {
      this.message.set('Selecciona una portada primero.');
      return;
    }

    this.uploadingCover.set(true);

    this.galleryService.uploadImage(this.selectedCoverFile).subscribe({
      next: response => {
        this.newAlbum.coverImage = response.imageUrl;
        this.uploadingCover.set(false);
        this.message.set('Portada subida correctamente.');
      },
      error: () => {
        this.uploadingCover.set(false);
        this.message.set('No se pudo subir la portada.');
      }
    });
  }
}