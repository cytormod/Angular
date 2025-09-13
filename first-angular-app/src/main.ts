import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// import { HeaderComponent } from './app/header.component';


// the following function (bootstrapApplication) tells Angular that there is an  App component and that it should look for this components tag in the index html tag to display the content  of this component on the screen

// bootstrapApplication(HeaderComponent)
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
