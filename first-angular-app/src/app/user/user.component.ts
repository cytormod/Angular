// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   // imports: [],
//   standalone: true,
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })

// // one way of doing (updating the state of Application)

// // 2nd Way: Signals: It is the special kind of values that tell Angular when they change.

// // The idea behind the signal is that you don't just have some initial values in them, but that you can also change those values.
// // You can change the value of the signal by calling the set method on that signal Object.
// export class UserComponent {
//   // We will add some code in the body of the class
//   selectedUser = signal(DUMMY_USERS[randomIndex]);

//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser.avatar
//   // }
//   get user_Name() {
//     return this.selectedUser.name
//   }

//   onSelectUser() {
//     console.log('clicked');
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex])
    
//   }
// }
// //What's the advantage of writing the code inside the class?
// // We can now access the "selecteduser" Property inside the template of the templateUrl. So all the properties that we are defining in the component class are available in the template of that component

// // What is Getter?
// // It's essentially a method, so a function inside the class, that's usable like property so that does not need to be called and executed explicitly, and that's meant to produce and return a new value. Here the new value is that Path image.

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export  class UserComponent{
@Input() avatar!: string;
@Input() name!: string;

get imagePath() {
  return 'assets/users/' + this.avatar;
}

  onSelectUser() {

  }
}