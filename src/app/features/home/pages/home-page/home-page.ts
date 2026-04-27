import { Component, OnInit, signal } from '@angular/core';
import { HomeMockData } from './models/HomeMockData';
import { Router } from '@angular/router';
//import { backgroundImage } from '../../../../../../public/images/image-inicio.png';


@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  progress = signal(0);
  loading = signal(true);

  mockData: HomeMockData = {
    title: 'PATRICK MUNDO',
    subtitle: 'Let’s explore Ecuador !',
    logo: 'images/logo-patrick.png',
    backgroundImage: 'images/image-inicio_2.png',
    carImage: 'images/carro.png'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    const totalDuration = 5000;
    const intervalMs = 50;
    const totalSteps = totalDuration / intervalMs;
    const stepValue = 100 / totalSteps;

    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += stepValue;

      if (currentProgress >= 100) {
        currentProgress = 100;
        this.progress.set(currentProgress);
        this.loading.set(false);
        clearInterval(timer);
        this.router.navigate(['/home']);
        return;
      }

      this.progress.set(currentProgress);
    }, intervalMs);
  }
}