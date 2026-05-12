import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryAlbum } from '../../features/gallery/models/gallry.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GalleryAdminService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<GalleryAlbum[]> {
    return this.http.get<GalleryAlbum[]>(`${this.apiUrl}/albums`);
  }

  createAlbum(album: any): Observable<GalleryAlbum> {
    return this.http.post<GalleryAlbum>(`${this.apiUrl}/albums`, album);
  }

  createPhoto(photo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/photos`, photo);
  }

  deletePhoto(photoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/photos/${photoId}`);
  }

  uploadImage(file: File): Observable<{ imageUrl: string }> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<{ imageUrl: string }>(
      `${this.apiUrl}/photos/upload`,
      formData
    );
  }
}