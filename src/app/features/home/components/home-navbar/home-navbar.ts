import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../models/component-interface';

@Component({
  selector: 'app-home-navbar',
  imports: [RouterLink],
  templateUrl: './home-navbar.html',
  styleUrl: './home-navbar.css',
})
export class HomeNavbar {
  @Input() items: NavItem[] = [];
  @Output() navigateTo = new EventEmitter<string>();

  selectedLanguage = signal<'es' | 'en' | 'ga'>('es');
  mobileMenuOpen = signal(false);
  sidebarOpen = signal(false);

  sidebarItems: NavItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Galería', route: '/gallery' },
    { label: 'Redes sociales', route: '/social' },
    { label: 'Sobre mí', route: '/about' }
  ];

  onNavigate(sectionId?: string): void {
    if (!sectionId) return;
    this.navigateTo.emit(sectionId);
    this.mobileMenuOpen.set(false);
    this.sidebarOpen.set(false);
  }

  openSidebar(): void {
    this.sidebarOpen.set(true);
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  changeLanguage(lang: 'es' | 'en' | 'ga') {
    this.selectedLanguage.set(lang);
    this.mobileMenuOpen.set(false);
    this.sidebarOpen.set(false);

    const tryChange = () => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;

      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        return true;
      }

      return false;
    };

    if (tryChange()) return;

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (tryChange() || attempts > 20) {
        clearInterval(interval);
      }
    }, 300);
  }
}