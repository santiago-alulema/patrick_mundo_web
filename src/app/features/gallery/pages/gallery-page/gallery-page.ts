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
  navItems: NavItem[] = [];
  search = '';

  heroData = {
    title: 'PATRICK MUNDO',
    subtitle: 'Let’s explore Ecuador !',
    buttonText: 'CONTACT ME',
    backgroundImage: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/476826884_1467689050853933_7197776986047616364_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGFLH2NGXWF9gCD0iUzTkVrYzxqKWMcPe9jPGopYxw972JXYZNO1bRlE8G1GaWFiubC0yg7GP1SeoZa2XJ9ZMMo&_nc_ohc=FyfFu6ztwq4Q7kNvwFtbDyJ&_nc_oc=Ado7baHH9phRxQOn3td4bN_yCyl_5hrCFVOaYxRRX_QoW3guhEPqQWjuyuLaz-uAWzg&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=kl8Yut04C-qK7ZCOrKKYTA&_nc_ss=7a3a8&oh=00_Af2eaz9sOEY0wbZ1mFuTCYm_MirUdkPLL0OJaZ_v9Qkxbg&oe=69E4377B',
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