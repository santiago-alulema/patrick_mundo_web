import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavbar } from "./features/home/components/home-navbar/home-navbar";
import { NavItem } from './features/home/components/models/component-interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
