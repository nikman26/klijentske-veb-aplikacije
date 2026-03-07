import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('klijentske_veb_aplikacije_2026');
  ime = 'Nikola'
  prezime = 'Manasijevic'
  indeks = '2023201356'
}
