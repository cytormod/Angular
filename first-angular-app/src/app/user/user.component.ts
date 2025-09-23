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


// you can use signals for accepting inputs, instead of using this @Input decorator.
// How one would accept inputs with signals, so that we do know about both approaches. 
// With the Upper-case I it's decorator, and with the lowercase "i" it is a special function.
// One can Replace the Input decorator by still adding properties with the intended names like avatar  as we did it before. But instead of adding a Decorator in front of them, we can now just assign the initial value to these properties. and the value is the result of calling that input function, which internally tells Angular this Avatar Property should be an input to this component, so that it should be set as an attribute, when that component is used
import { Component, Input, computed, input, Output, EventEmitter, output } from '@angular/core';

import { type User } from './user.model'
import { CardComponent } from "../shared/card/card";

// type User = {
//     id: string;
//     avatar: string;
//     name: string;
//   }

  //Another alternative way to set type aka alias (above written), which is "INTERFACE" Another TS Feature.

  // In Angular project it is a bit more common to see interfaces.

  // interface User {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }

  //One key difference to the type keyword is that with interface you can really only define object types, with the type keyword, you can also define other types.

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

// ! Here we are using Signal
// export  class UserComponent{
// // @Input({required: true}) avatar!: string;
// // @Input({required: true}) name!: string;

// // You can also mark an input as required by calling input.required()
// // avatar = input<string>();
// avatar = input.required<string>()
// name = input.required<string>();

// // Instead of doing it with the getter, we can now do it with the computed function. so ImagePath should be now computed value

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// });
// // get imagePath() {
// //   return 'assets/users/' + this.avatar;
// // }

//   onSelectUser() {

//   }
// }

// !!! JUST USE DECORATOR FOR NOW 
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input ({required: true}) avatar!: string;
  // @Input ({ required: true }) name!: string;

  // @Input({required: true}) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }

  // You can also outsource the above object, by grabbing the type you want to outsource by creating a so-called type alias

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>() // select property will receive the innital 
  // value. The Instance of the EventEmitter class we're creating here. So this EventEmitter Object  we're getting here in the end will then allow us to emit emit custom values throught the select property, to any parent component that's interested. 
  // we want to pass the information that a specific user was selected to the component that's using the UserComponent.

  // ! Currently we will be using Output decorator, because it is widely used so far
  // select = output<string>(); // select function under the Hood stores the EventEmitter, so one does not need to explicilty create a new EventEmitter on one own.
  // ! Also, here the output function does not create any kind of signal

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }

}