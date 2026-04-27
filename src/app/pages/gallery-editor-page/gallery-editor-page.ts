import { Component, computed, OnInit, signal } from '@angular/core';
import { GalleryAlbum } from '../../features/gallery/models/gallry.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery-editor-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery-editor-page.html',
  styleUrl: './gallery-editor-page.css',
})
export class GalleryEditorPage implements OnInit {
  private readonly fileUrl = '/data/albumes-fotos.txt';

  albums = signal<GalleryAlbum[]>([]);
  selectedAlbumId = signal<number | null>(null);
  message = signal('');

  newPhoto = {
    title: '',
    imageUrl: '',
    description: '',
    location: '',
    size: '4000x3000',
    price: 120
  };

  selectedAlbum = computed(() =>
    this.albums().find(a => a.id === this.selectedAlbumId())
  );

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadAlbumsFromFile();
  }

  loadAlbumsFromFile(): void {
    this.http.get<GalleryAlbum[]>(this.fileUrl).subscribe({
      next: data => {
        this.albums.set(data);
        this.selectedAlbumId.set(data[0]?.id ?? null);
        this.message.set('Álbumes cargados correctamente.');
      },
      error: () => {
        this.message.set('No se pudo cargar /data/albumes-fotos.json');
      }
    });
  }

  selectAlbum(id: number): void {
    this.selectedAlbumId.set(id);
  }

  addPhoto(): void {
    const albumId = this.selectedAlbumId();
    const albums = structuredClone(this.albums());
    const album = albums.find(a => a.id === albumId);

    if (!album) return;

    if (!this.newPhoto.title.trim() || !this.newPhoto.imageUrl.trim()) {
      this.message.set('El título y la URL son obligatorios.');
      return;
    }

    album.photos ??= [];

    const nextId = album.photos.length
      ? Math.max(...album.photos.map(p => p.id)) + 1
      : 1;

    album.photos.push({
      id: nextId,
      title: this.newPhoto.title,
      imageUrl: this.newPhoto.imageUrl,
      description: this.newPhoto.description,
      location: this.newPhoto.location,
      size: this.newPhoto.size,
      price: Number(this.newPhoto.price)
    });

    album.photosCount = album.photos.length;

    this.albums.set(albums);
    this.clearForm();
    this.message.set('Foto agregada. Descarga el archivo actualizado.');
  }

  deletePhoto(photoId: number): void {
    const albumId = this.selectedAlbumId();
    const albums = structuredClone(this.albums());
    const album = albums.find(a => a.id === albumId);

    if (!album?.photos) return;

    album.photos = album.photos.filter(p => p.id !== photoId);
    album.photosCount = album.photos.length;

    this.albums.set(albums);
    this.message.set('Foto eliminada. Descarga el archivo actualizado.');
  }

  downloadTxt(): void {
    const json = JSON.stringify(this.albums(), null, 2);
    const blob = new Blob([json], { type: 'text/plain;charset=utf-8' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'albumes-fotos.txt';
    link.click();

    URL.revokeObjectURL(url);
    this.message.set('Archivo descargado correctamente.');
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
  }

  newAlbum = {
    title: '',
    country: '',
    coverImage: ''
  };

  addAlbum(): void {
    if (!this.newAlbum.title.trim() || !this.newAlbum.country.trim()) {
      this.message.set('El título y país del álbum son obligatorios.');
      return;
    }

    const albums = structuredClone(this.albums());

    const nextId = albums.length
      ? Math.max(...albums.map(a => a.id)) + 1
      : 1;

    albums.push({
      id: nextId,
      title: this.newAlbum.title,
      country: this.newAlbum.country,
      photosCount: 0,
      coverImage: this.newAlbum.coverImage || 'https://via.placeholder.com/800x500?text=Nuevo+Album',
      photos: []
    });

    this.albums.set(albums);
    this.selectedAlbumId.set(nextId);

    this.newAlbum = {
      title: '',
      country: '',
      coverImage: ''
    };
    this.showAlbumForm.set(false);
    this.message.set('Álbum agregado correctamente.');
  }

  showAlbumForm = signal(false);

  toggleAlbumForm(): void {
    this.showAlbumForm.update(value => !value);
  }

  cancelAlbumForm(): void {
    this.showAlbumForm.set(false);

    this.newAlbum = {
      title: '',
      country: '',
      coverImage: ''
    };
  }
}