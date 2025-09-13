// We need class here. Because components in Angular are classes that are enhanced by that component decorator.
//Component: is the description of What the job of the class will be. In this case that will define a component. There will be other kinds of classes

import { Component } from '@angular/core';

// @symbol, then name of the decorator, that is "Component" in this case

@Component({
    // WE have to define a SELECTOR that will tell Angular which element on the screen should be controlled by our own Component or should be replaced by our own Component, you could say.
    // And here you will select Element by tag and to slect element by tag that consist of at-least two words seperated  by dash. For example: app-header.
    // You do not use single one word, because there is a chance that there is a build-in element. Example: There is a built-in header element in HTML
    selector: 'app-header',
    // template: '<h1>Hello World</h1>', In short template defines the mark-up. Also just the template is useful when you want to use just for 1, 2, or 3 line of Markup
    // this is not the recommended way of defining, you should ony use this inline approach where you do it inside of this TS file.
    standalone: true,
    templateUrl: './header.component.html'

})

export class HeaderComponent {}