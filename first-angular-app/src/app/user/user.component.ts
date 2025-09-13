import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  // imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // We will add some code in the body of the class
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }
  get user_Name() {
    return this.selectedUser.name
  }
}
//What's the advantage of writing the code inside the class?
// We can now access the "selecteduser" Property inside the template of the templateUrl. So all the properties that we are defining in the component class are available in the template of that component

// What is Getter?
// It's essentially a method, so a function inside the class, that's usable like property so that does not need to be called and executed explicitly, and that's meant to produce and return a new value. Here the new value is that Path image.