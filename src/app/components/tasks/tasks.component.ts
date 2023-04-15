import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  // ultimately this will be coming from our backend - json server / django
  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
      this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task){
    // .subscribe() is like a then statement
    this.taskService.deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }

}
