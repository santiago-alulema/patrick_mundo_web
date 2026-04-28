import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

import { PhotoGrid } from "../../components/photo-grid/photo-grid";
import { GalleryHero } from "../../components/gallery-hero/gallery-hero";
import { HomeNavbar } from "../../../home/components/home-navbar/home-navbar";
import { Footer } from "../../../../shared/components/footer/footer";
import { PhotoInfoModal } from "../../components/photo-info-modal/photo-info-modal";

import { GalleryAlbum } from '../../models/gallry.interface';
import { GalleryPhoto } from '../../models/GalleryAlbum';
import { GalleryService } from '../../../../services/GalleryService';

@Component({
  selector: 'app-gallery-detail-page',
  imports: [
    PhotoGrid,
    GalleryHero,
    HomeNavbar,
    Footer,
    NgIf,
    RouterLink,
    PhotoInfoModal
  ],
  templateUrl: './gallery-detail-page.html',
  styleUrl: './gallery-detail-page.css',
})
export class GalleryDetailPage implements OnInit {
  selectedAlbum = signal<GalleryAlbum | undefined>(undefined);
  selectedPhoto = signal<GalleryPhoto | null>(null);

  photos = computed(() => this.selectedAlbum()?.photos ?? []);

  heroData = {
    title: 'PATRICK MUNDO',
    subtitle: 'Let’s explore Ecuador !',
    buttonText: 'CONTACT ME',
    backgroundImage: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/476826884_1467689050853933_7197776986047616364_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGFLH2NGXWF9gCD0iUzTkVrYzxqKWMcPe9jPGopYxw972JXYZNO1bRlE8G1GaWFiubC0yg7GP1SeoZa2XJ9ZMMo&_nc_ohc=FyfFu6ztwq4Q7kNvwFtbDyJ&_nc_oc=Ado7baHH9phRxQOn3td4bN_yCyl_5hrCFVOaYxRRX_QoW3guhEPqQWjuyuLaz-uAWzg&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=kl8Yut04C-qK7ZCOrKKYTA&_nc_ss=7a3a8&oh=00_Af2eaz9sOEY0wbZ1mFuTCYm_MirUdkPLL0OJaZ_v9Qkxbg&oe=69E4377B',
    logo: 'images/logo-patrick.png'
  };

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.galleryService.getAlbumById(id).subscribe(album => {
      this.selectedAlbum.set(album);
      console.log('Album desde service:', album);
      console.log('Fotos:', album?.photos);
    });
  }

  openPhoto(photo: GalleryPhoto): void {
    this.selectedPhoto.set(photo);
  }

  closePhotoModal(): void {
    this.selectedPhoto.set(null);
  }

  buyPhoto(photo: GalleryPhoto): void {
    console.log("first")
    const phone = '593986078545';

    const message = `
Hola Patrick, estoy interesado en comprar esta fotografía:

- Imagen: ${photo.imageUrl}
- Lugar: ${photo.location ?? 'Cuenca, Ecuador'}
- Precio: $${photo.price ?? ''}

Por favor me ayudas con más información.
  `.trim();

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  }
}