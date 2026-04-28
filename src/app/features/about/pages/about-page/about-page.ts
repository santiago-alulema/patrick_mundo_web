import { Component } from '@angular/core';
import { SocialLink } from '../../../../shared/interfaces/SocialLink';
import { Footer } from "../../../../shared/components/footer/footer";
import { AboutValues } from "../../components/about-values/about-values";
import { AboutHero } from "../../components/about-hero/about-hero";
import { AboutIntro } from "../../components/about-intro/about-intro";
import { HomeNavbar } from "../../../home/components/home-navbar/home-navbar";
import { NavItem } from '../../../home/components/models/component-interface';

@Component({
  selector: 'app-about-page',
  imports: [Footer, AboutValues, AboutHero, AboutIntro, HomeNavbar],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  hero = {
    title: 'About me',
    subtitle: 'A personal and authentic way to discover Ecuador'
  };
  navItems: NavItem[] = [{ label: 'Home', route: '/home' }];
  aboutData = {
    name: 'Patrick Mundo',
    role: 'Private guide & travel host',
    image: 'https://scontent.fuio5-1.fna.fbcdn.net/v/t51.82787-15/605095562_18299460847286909_9199452155195062446_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG4fAkyJ-LhiU40JljvikUCDQ-Nrkltn20ND42uSW2fbXw10ki4DenknTAuH9ZW3EeMR4taU6NgfVlRXgPIVDpr&_nc_ohc=_ANb0HltiVEQ7kNvwEXxR5i&_nc_oc=AdoW4qsyE_Hp0KYVJlKYd0GLT2SdiUgF9XtbilnIYm69zZvDeEjP4kNimcNlsPdj7Ag&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=uPYEkAzJd0GP3VW1Y6f4yw&_nc_ss=7a3a8&oh=00_Af3xn9OnWqFSbj4bgAk_UHzkb5Ex23FZA-7Y1jiGX2gZSw&oe=69E4658C',
    description1:
      'I created this website to share some of the trips I have made in Ecuador and other beautiful places. I enjoy showing travelers the landscapes, culture and hidden gems that make each route special.',
    description2:
      'I also offer friendly recommendations, personalized experiences and direct support for people who want to explore with comfort, trust and a local perspective.',
    description3:
      'My goal is simple: help you enjoy meaningful trips with warmth, safety and unforgettable memories.',
    cta: 'CONTACT ME'
  };

  values = [
    {
      title: 'Local experience',
      description: 'Real routes, authentic places and knowledge of the area.'
    },
    {
      title: 'Personal attention',
      description: 'Every trip can be adapted to your interests and pace.'
    },
    {
      title: 'Comfort & trust',
      description: 'A friendly, safe and professional travel experience.'
    }
  ];

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
}