import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { TaskService } from '../services/task.service';
import { Task } from './../models/task.model'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  taskForm!: FormGroup;
  taskPreview$!: Observable<Task>;

  constructor(private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      name: [null],
      description: [null],
      done: [null],
      user: [null]
    });
    this.taskPreview$ = this.taskForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0
      }))
    )
  }

  onSubmitForm(): void {
    this.taskService.addTask(this.taskForm.value).pipe(
      tap(() => this.router.navigateByUrl('/'))
    ).subscribe();
    
  }

}
