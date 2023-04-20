import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

// each componenet in angular has:
  //  a css selector that defines how the component is used in a templtate
  // an HTML template taht instructs Angualr how to render the component
  // An optional set of CSS styles that define the appearnce of the tmeplate's HTML elements

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url == route;
  }

}
