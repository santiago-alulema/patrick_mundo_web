import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeNavbar } from '../../../home/components/home-navbar/home-navbar';
import { NavItem } from '../../../home/components/models/component-interface';
import { BlogPost, BlogService } from '../../services/blog-category';
import { Footer } from "../../../../shared/components/footer/footer";

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HomeNavbar, Footer],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.css',
})
export class BlogPage implements OnInit {
  posts = signal<BlogPost[]>([]);
  loading = signal(false);
  errorMessage = signal('');
  search = '';

  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Blog', route: '/blog' },
    { label: 'About me', route: '/about' },
  ];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading.set(true);
    this.errorMessage.set('');

    this.blogService.getPublishedPosts().subscribe({
      next: posts => {
        this.posts.set(posts);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Could not load blog posts.');
        this.loading.set(false);
      }
    });
  }

  get filteredPosts(): BlogPost[] {
    const term = this.search.trim().toLowerCase();

    if (!term) return this.posts();

    return this.posts().filter(post =>
      post.title.toLowerCase().includes(term) ||
      post.summary.toLowerCase().includes(term) ||
      post.category?.name?.toLowerCase().includes(term)
    );
  }

  formatDate(value: string): string {
    return new Date(value).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });
  }
}