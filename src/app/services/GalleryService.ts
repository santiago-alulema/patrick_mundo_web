import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GalleryAlbum } from '../features/gallery/models/gallry.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<GalleryAlbum[]> {
    return this.http.get<GalleryAlbum[]>(`${this.apiUrl}/albums`);
  }

  getAlbumById(id: number): Observable<GalleryAlbum | undefined> {
    return this.getAlbums().pipe(
      map(albums => albums.find(a => a.id === id))
    );
  }
}