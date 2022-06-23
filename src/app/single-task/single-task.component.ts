import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit{
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
  }
}
