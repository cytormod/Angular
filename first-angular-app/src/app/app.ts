import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './tasks/task.component';
// import {Task} from './tasks/task/task.component'
// import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  // import: NgFor,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// export class App {
//   protected readonly title = signal('first-angular-app');
// }

export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) =>
      user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
  this.selectedUserId = id;    
  }

}

// The idea of the Angular is that you build the tree of componenets where you have one component, the ROOT Component at the top, and you have other components nested inside of that components.

// The idea behind building such a component tree is that those components that are part of the same tree, part of the same Angular app, therefore will be able to work together and exchange data for example and communicate with each other.
// ! Remove "bootstrapApplication(HeaderComponent)" and "import { HeaderComponent } from './app/header.component'" from main.ts

