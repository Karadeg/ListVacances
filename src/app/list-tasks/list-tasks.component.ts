import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  tasks$!: Observable<Task[]>;
  @Input() doneList!: boolean;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAllTasks();
  }

  setDone(taskId: number): void {
    this.taskService.modifyDoneTask(taskId).pipe(
      tap(() => {
        this.tasks$ = this.taskService.getAllTasks()
      })
    ).subscribe();
  }

}
