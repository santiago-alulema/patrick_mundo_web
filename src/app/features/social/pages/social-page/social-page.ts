import { Component } from '@angular/core';
import { SocialPageItem } from '../../interfaces/SocialPageItem';
import { SocialGrid } from "../../components/social-grid/social-grid";
import { HomeNavbar } from "../../../home/components/home-navbar/home-navbar";

@Component({
  selector: 'app-social-page',
  imports: [SocialGrid, HomeNavbar],
  standalone: true,
  templateUrl: './social-page.html',
  styleUrl: './social-page.css',
})
export class SocialPage {
  socials: SocialPageItem[] = [
    {
      title: 'YouTube',
      description: 'Travel videos and visual stories from unforgettable places.',
      url: 'https://youtube.com',
      icon: '▶️',
      color: 'bg-gradient-to-br from-rose-400 to-rose-500',
      image: 'https://cdn-icons-png.freepik.com/512/1216/1216928.png'
    },
    {
      title: 'Facebook',
      description: 'Updates, community moments and travel experiences.',
      url: 'https://facebook.com',
      icon: '📘',
      color: 'bg-gradient-to-br from-sky-400 to-blue-500',
      image: 'https://img.freepik.com/vector-premium/ilustracion-icono-facebook-logotipo-aplicacion-facebook-icono-redes-sociales_561158-3663.jpg'
    },
    {
      title: 'WhatsApp',
      description: 'Direct contact to plan your next private trip.',
      url: 'https://wa.me/593990014703',
      icon: '💬',
      color: 'bg-gradient-to-br from-emerald-400 to-green-500',
      image: 'https://cdn-icons-png.flaticon.com/512/1384/1384095.png'
    },
    {
      title: 'TikTok',
      description: 'Short travel clips, routes and special moments.',
      url: 'https://tiktok.com',
      icon: '🎵',
      color: 'bg-gradient-to-br from-slate-500 to-slate-700',
      image: 'https://cdn-icons-png.freepik.com/512/3670/3670313.png'
    }
  ];
}
