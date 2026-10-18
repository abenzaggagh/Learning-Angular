import { Component } from '@angular/core';
import { Home } from './pages/home/home';
import { Header } from './core/component/header/header';
import { Footer } from './core/component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Home, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
