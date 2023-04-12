import { Component } from '@angular/core';
import {Task} from '../../Task';
import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  // ultimately this will be coming from our backend - json server / django
  tasks: Task[] = TASKS;

  constructor(){}

  ngOnInit(): void {
  }

}
