import { Component, signal } from '@angular/core';
import { GalleryAlbum } from '../../models/gallry.interface';
import { GalleryToolbar } from "../../components/gallery-toolbar/gallery-toolbar";
import { GalleryHero } from "../../components/gallery-hero/gallery-hero";
import { GalleryGrid } from "../../components/gallery-grid/gallery-grid";
import { HomeNavbar } from "../../../home/components/home-navbar/home-navbar";
import { NavItem } from '../../../home/components/models/component-interface';
import { GalleryService } from '../../../../services/GalleryService';

@Component({
  selector: 'app-gallery-page',
  imports: [GalleryToolbar, GalleryHero, GalleryGrid, HomeNavbar],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css',
})
export class GalleryPage {
  albums = signal<GalleryAlbum[]>([]);
  navItems: NavItem[] = [{ label: 'Home', route: '/home' }];
  search = '';

  heroData = {
    title: 'PATRICK MUNDO',
    subtitle: 'Let’s explore Ecuador !',
    buttonText: 'CONTACT ME',
    backgroundImage: 'images/fondo-banner.jpg',
    logo: 'images/logo-patrick.png'
  };

  constructor(
    private galleryService: GalleryService
  ) {
    this.galleryService.getAlbums().subscribe(album => {
      this.albums.set(album);
    });

    console.log(this.albums)
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