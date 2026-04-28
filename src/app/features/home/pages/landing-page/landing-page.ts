import { Component } from '@angular/core';
import { HomeNavbar } from "../../components/home-navbar/home-navbar";
import { DestinationCardMock, FeatureHighlightMock, NavItem, PopularTripMock, Review } from '../../components/models/component-interface';
import { HeroSection } from "../../components/hero-section/hero-section";
import { FeatureHighlight } from "../../components/feature-highlight/feature-highlight";
import { PopularTripsSection } from "../../components/popular-trips-section/popular-trips-section";
import { DestinationsSection } from "../../components/destinations-section/destinations-section";
import { ReviewsSection } from "../../components/reviews-section/reviews-section";
import { ContactBanner } from "../../components/contact-banner/contact-banner";
import { NgStyle } from '@angular/common';
import { SocialLink } from '../../../../shared/interfaces/SocialLink';
import { Footer } from "../../../../shared/components/footer/footer";

@Component({
  selector: 'app-landing-page',
  imports: [HomeNavbar, HeroSection, FeatureHighlight, PopularTripsSection, DestinationsSection, ReviewsSection, ContactBanner, NgStyle, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {


  socials: SocialLink[] = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/593999999999',
      icon: '💬'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/',
      icon: '📘'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/',
      icon: '▶️'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/',
      icon: '🎵'
    }
  ];

  navItems: NavItem[] = [
  { label: 'Home', sectionId: 'home' },
  { label: 'Travel info', sectionId: 'travel-info' },
  { label: 'Reviews', sectionId: 'reviews' },
  { label: 'Gallery', route: '/gallery' },
  { label: 'About me', route: '/about' },
  { label: 'Contact', sectionId: 'contact' },
];

  heroData = {
    title: 'PATRICK MUNDO',
    subtitle: 'Let’s explore Ecuador !',
    buttonText: 'CONTACT ME',
    backgroundImage: 'images/fondo-banner.jpg',
    logo: 'images/logo-patrick.png'
  };

  featureData: FeatureHighlightMock = {
    title: 'Safe travel & Comfortable',
    description:
      'My vehicle is a 2023 SUV, fully insured and maintained by the dealership. It has 6 airbags, AppleCarPlay, panoramic sunroof and offers plenty room for up to 4 people.',
    image: 'images/carro-viajes.png',
    tags: ['FULLY INSURED', '6 AIRBAGS']
  };

  favoriteDestinations: DestinationCardMock[] = [
    {
      title: 'Limon Indanza',
      image: 'https://i0.wp.com/www.visitamoronasantiago.com/wp-content/uploads/2020/07/coloradas-compressor.jpg?fit=700%2C348&ssl=1',
      description:
        'This is my favorite destination. At only 2 hours from Cuenca, Limón offers amazing nature tour with lots of waterfalls, petroglyphs and birds and butterflies'
    },
    {
      title: 'Quito - Cuenca',
      image: 'https://www.cuenca.gob.ec/sites/default/files/noticias/WhatsApp%20Image%202023-12-08%20at%208.24.31%20AM_0.jpeg',
      description:
        'This is a trip that everyone who lives in Ecuador should do once. This journey includes volcanoes, 300+ year old haciendas and much more.'
    },
    {
      title: 'Hiking in El Cajas',
      image: 'images/image-inicio_2.png',
      description:
        'Around Cuenca you can go hike many beautiful trails. There are several options at all levels available. Connect with nature for a half or full day.'
    }
  ];

  popularTrips: PopularTripMock[] = [
    {
      title: 'Haciendas Tour',
      image: 'https://rebeccaadventuretravel.com/wp-content/uploads/2022/08/Family-Hacienda-1.jpg',
      description:
        'Ecuador has many 300+ year old haciendas. Many of them have been transformed into hotels, offering a great location with history.'
    },
    {
      title: 'Train ride in Alausi',
      image: 'https://www.imagineecuador.com/wp-content/uploads/2021/10/Recurso-43-6.png',
      description:
        'This can be a day trip or 2 days, 1 night to explore one of the most spectacular train rides in the world.'
    },
    {
      title: 'Ingapirca-Bibllan-Gualaceo',
      image: 'https://www.vanservice.com.ec/tours-diarios/tour6/gualaceo3.jpg',
      description:
        'A very complete day trip, visiting Ingapirca, Orchid farm and a fabulous church in the mountain hill of Biblian'
    },
    {
      title: 'Birding in the Cloud Forest',
      image: 'images/image-inicio_2.png',
      description:
        'Seeing some of the most exclusive birds of Ecuador in the cloud forest, at only 2 hours away from Cuenca'
    }
  ];

  reviews: Review[] = [
    {
      name: 'E. Briggs',
      avatar: 'images/e-bring.jpeg',
      comment:
        'Each trip we did with Patrick has been customized for us, featuring the types of activities we enjoy most. His knowledge of restaurants and accommodations in areas visited has always ensured we eat well and stay in clean, comfortable places.',
      rating: 5
    },
    {
      name: 'E. Fraterman',
      avatar: 'images/eric-fraterman.jpeg',
      comment:
        'We did a short trip to Limon Indanza with Patrick, my son and my wife. He has an intimate knowledge of this area. His choice of restaurants and our hotel was excellent. He delivered good value and I can recommend him without hesitation.',
      rating: 5
    },
  ];

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }


}