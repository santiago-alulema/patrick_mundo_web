import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../models/component-interface';

@Component({
  selector: 'app-home-navbar',
  imports: [],
  templateUrl: './home-navbar.html',
  styleUrl: './home-navbar.css',
})
export class HomeNavbar {
  @Input() items: NavItem[] = [];
  @Output() navigateTo = new EventEmitter<string>();

  selectedLanguage = signal<'es' | 'en' | 'nl' | 'fr'>('en');
  mobileMenuOpen = signal(false);
  sidebarOpen = signal(false);

  constructor(private router: Router) { }

  onNavigate(item: NavItem): void {
    this.mobileMenuOpen.set(false);
    this.sidebarOpen.set(false);

    if (item.route) {
      this.router.navigate([item.route]);
      return;
    }

    if (item.sectionId) {
      this.navigateTo.emit(item.sectionId);
    }
  }

  changeLanguage(lang: 'es' | 'en' | 'nl' | 'fr') {
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