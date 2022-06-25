import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Observable, tap } from 'rxjs';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  tasks$!: Observable<Task[]>;

  constructor(private router: Router,
    private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAllTasks();
  }

  onContinue(done: boolean): void {
    this.router.navigateByUrl(`/createTask/:${done}`);
  }

  setDone(taskId: number): void {
    this.taskService.modifyDoneTask(taskId).pipe(
      tap(() => {
        this.tasks$ = this.taskService.getAllTasks()
      })
    ).subscribe();
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).pipe(
      tap(() => {
        this.tasks$ = this.taskService.getAllTasks()
      })
    ).subscribe();
  }

}
