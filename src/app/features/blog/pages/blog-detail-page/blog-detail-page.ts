import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HomeNavbar } from '../../../home/components/home-navbar/home-navbar';
import { NavItem } from '../../../home/components/models/component-interface';
import { BlogPost, BlogService } from '../../services/blog-category';
import { Footer } from "../../../../shared/components/footer/footer";

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, HomeNavbar, Footer],
  templateUrl: './blog-detail-page.html',
  styleUrl: './blog-detail-page.css',
})
export class BlogDetailPage implements OnInit {
  post = signal<BlogPost | null>(null);
  loading = signal(false);
  errorMessage = signal('');

  navItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Blog', route: '/blogs' },
    { label: 'About me', route: '/about' },
  ];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      this.errorMessage.set('Article not found.');
      return;
    }

    this.loadPost(slug);
  }

  loadPost(slug: string): void {
    this.loading.set(true);

    this.blogService.getPostBySlug(slug).subscribe({
      next: post => {
        this.post.set(post);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Article not found.');
        this.loading.set(false);
      }
    });
  }

  formatDate(value: string): string {
    return new Date(value).toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    });
  }
  capitalizeFirstLetter(value: string): string {
    if (!value) return '';

    const text = value.trim();

    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}