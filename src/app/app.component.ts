import { Component } from '@angular/core';


// see html file - the selector "app-root" is loaded in the index.html in the body sectoin
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// this where you put any properties of your component e.g. title, methods
export class AppComponent {
  title: string = 'Task Tracker';
}
