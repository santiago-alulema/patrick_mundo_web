import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  coverImage: string;
  isPublished: boolean;
  createdAt: string;
  categoryId: number;
  category?: BlogCategory;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPublishedPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiUrl}/BlogPosts/published`);
  }

  getPostBySlug(slug: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.apiUrl}/BlogPosts/by-slug/${slug}`);
  }
}