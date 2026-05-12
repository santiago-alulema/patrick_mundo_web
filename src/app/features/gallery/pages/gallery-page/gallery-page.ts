import { Component, OnInit, signal } from '@angular/core';
import { GalleryAlbum } from '../../models/gallry.interface';
import { GalleryToolbar } from '../../components/gallery-toolbar/gallery-toolbar';
import { GalleryHero } from '../../components/gallery-hero/gallery-hero';
import { GalleryGrid } from '../../components/gallery-grid/gallery-grid';
import { HomeNavbar } from '../../../home/components/home-navbar/home-navbar';
import { NavItem } from '../../../home/components/models/component-interface';
import { GalleryService } from '../../../../services/GalleryService';
import { CommonModule } from '@angular/common';
import { Footer } from "../../../../shared/components/footer/footer";
import { UnderConstruction } from "../../../../shared/components/under-construction/under-construction";

@Component({
  selector: 'app-gallery-page',
  imports: [GalleryToolbar, GalleryHero, GalleryGrid, HomeNavbar, CommonModule, Footer, UnderConstruction],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css',
})
export class GalleryPage implements OnInit {
  albums = signal<GalleryAlbum[]>([]);
  loading = signal(false);
  errorMessage = signal('');

  navItems: NavItem[] = [
    { label: 'Home', route: 'home' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'About me', route: '/about' },
    { label: 'Blog', route: 'blogs' },
  ];

  search = '';

  heroData = {
    title: 'PATRICK MUNDO',
    subtitle: 'Let’s explore Ecuador !',
    buttonText: 'CONTACT ME',
    backgroundImage: 'images/fondo-banner.jpg',
    logo: 'images/logo-patrick.png'
  };

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading.set(true);
    this.errorMessage.set('');

    this.galleryService.getAlbums().subscribe({
      next: albums => {
        this.albums.set(albums);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set('No se pudieron cargar los álbumes.');
      }
    });
  }

  get filteredAlbums(): GalleryAlbum[] {
    const term = this.search.trim().toLowerCase();
    const albums = this.albums();

    if (!term) return albums;

    return albums.filter(album =>
      album.title.toLowerCase().includes(term) ||
      album.country.toLowerCase().includes(term)
    );
  }

  onSearch(value: string): void {
    this.search = value;
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}