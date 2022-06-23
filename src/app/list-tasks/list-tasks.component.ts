import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { User } from '../models/user.model';
import { TaskService } from '../services/task.service';
import { SingleTaskComponent } from '../single-task/single-task.component';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  tasks!: Task[];
  @Input() doneList!: boolean;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

  setDone(task: Task): void {
    this.taskService.modifyDoneTask(task);
  }

}
