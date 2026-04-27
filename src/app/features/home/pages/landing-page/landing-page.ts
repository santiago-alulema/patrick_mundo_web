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
    { label: 'About', sectionId: 'about' },
    { label: 'Destinations', sectionId: 'destinations' },
    { label: 'Trips', sectionId: 'trips' },
    { label: 'Reviews', sectionId: 'reviews' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  heroData = {
    title: 'PATRICK MUNDO',
    subtitle: 'Let’s explore Ecuador !',
    buttonText: 'CONTACT ME',
    backgroundImage: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/476826884_1467689050853933_7197776986047616364_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGFLH2NGXWF9gCD0iUzTkVrYzxqKWMcPe9jPGopYxw972JXYZNO1bRlE8G1GaWFiubC0yg7GP1SeoZa2XJ9ZMMo&_nc_ohc=FyfFu6ztwq4Q7kNvwFtbDyJ&_nc_oc=Ado7baHH9phRxQOn3td4bN_yCyl_5hrCFVOaYxRRX_QoW3guhEPqQWjuyuLaz-uAWzg&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=kl8Yut04C-qK7ZCOrKKYTA&_nc_ss=7a3a8&oh=00_Af2eaz9sOEY0wbZ1mFuTCYm_MirUdkPLL0OJaZ_v9Qkxbg&oe=69E4377B',
    logo: 'images/logo-patrick.png'
  };

  featureData: FeatureHighlightMock = {
    title: 'Safe travel & Comfortable',
    description:
      'My vehicle is a 2023 SUV, fully insured and maintained by the dealership. It has 6 airbags, AppleCarPlay, panoramic sunroof and offers plenty room for up to 4 people.',
    image: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/480186573_1469492577340247_5661120561062649629_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH521dZeEOfOSt3og4Ie2mtsQtXKPiZBDWxC1co-JkENUgMC-N6d5YsXgv8mA70kYh9-Z6MEqI-CPb8JCjfADbG&_nc_ohc=ACk8_DomLxMQ7kNvwFojHyG&_nc_oc=AdqoZiYbfDtv3WhqPz_k_Pv59pVusW0TzwRT5zSE6NQVYrthFgG3txb-IU6c9REYsG8&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=w-lnpBHqqsWda2VaqB8OHA&_nc_ss=7a3a8&oh=00_Af1aSUrFHT1qHyeCkMmRQMEo96ExeNj8dXbJ7gkkpfkpvA&oe=69E442D1',
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
      image: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/524497173_1593340408288796_7228470966242075798_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=b895b5&_nc_ohc=P3JtKwNQrQ0Q7kNvwFqMAOt&_nc_oc=Adp4L1qRaGBwW0jkGMlrbUyQqypJvhUMckydXNZdnvjQ7xG7l0R3D09lecDaHjy9rro&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=zMPAy3Q0371odFaYoit-1g&_nc_ss=7a389&oh=00_Af2teVSOYZAHYxQN9XtRdckKCzerccfVd9cQNcfUoQNXKg&oe=69D69C00',
      description:
        'Ecuador has many 300+ year old haciendas. Many of them have been transformed into hotels, offering a great location with history.'
    },
    {
      title: 'Train ride in Alausi',
      image: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/521705029_1591507581805412_5427191387561108862_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=b895b5&_nc_ohc=KXTpPRAyPdYQ7kNvwGJpvVy&_nc_oc=AdqabTObOiERMYL_8u86zPYNE-i9yAyIgWdzIOJAjVsAUgV2elPrhlanyvetNqE3kHU&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=s3BvkLbkkg7hUcI417lQcQ&_nc_ss=7a389&oh=00_Af11RPxEtXAkhBgLzXN8ZXCPMOy8hYgqlADaq4UVlHy0SA&oe=69D69483',
      description:
        'This can be a day trip or 2 days, 1 night to explore one of the most spectacular train rides in the world.'
    },
    {
      title: 'Ingapirca-Bibllan-Gualaceo',
      image: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/512024566_1570827587206745_6295415800051368419_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=b895b5&_nc_ohc=-4uLaDZ3MLEQ7kNvwEVOWgC&_nc_oc=AdpHsJbFTbo68kt9_zMJecmL6tZpqZZDowImncmzSI_RcI_zNsV-0Akfrye53jsUVYQ&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=xCaJIDkQX5RzifgYE5bhOQ&_nc_ss=7a389&oh=00_Af2WetybmjLKjO4elS0NlKr-lfDD1tW-VQq6E8kcm3yYqQ&oe=69D69776',
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
      avatar: 'https://img.freepik.com/foto-gratis/joven-hombre-barbudo-camisa-rayas_273609-5677.jpg?semt=ais_incoming&w=740&q=80',
      comment:
        'Each trip we did with Patrick has been customized for us, featuring the types of activities we enjoy most. His knowledge of restaurants and accommodations in areas visited has always ensured we eat well and stay in clean, comfortable places.',
      rating: 5
    },
    {
      name: 'E. Fraterman',
      avatar: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
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