import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GalleryAlbum } from '../features/gallery/models/gallry.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private url = '/data/albumes-fotos.txt';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<GalleryAlbum[]> {
    return this.http
      .get(this.url, { responseType: 'text' })
      .pipe(
        map(data => JSON.parse(data))
      );
  }

  getAlbumById(id: number): Observable<GalleryAlbum | undefined> {
    return this.getAlbums().pipe(
      map(albums => albums.find(a => a.id === id))
    );
  }
}
