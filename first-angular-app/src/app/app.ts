import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}

// The idea of the Angular is that you build the tree of componenets where you have one component, the ROOT Component at the top, and you have other components nested inside of that components.

// The idea behind building such a component tree is that those components that are part of the same tree, part of the same Angular app, therefore will be able to work together and exchange data for example and communicate with each other.
// ! Remove "bootstrapApplication(HeaderComponent)" and "import { HeaderComponent } from './app/header.component'" from main.ts

