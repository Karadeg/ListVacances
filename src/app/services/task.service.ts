import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../models/task.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    tasks: Task[] = [
        new Task(1, "Tache 1", false, "desccription"),
        new Task(2, "Tache 2", true, "description", new User(1, "Karadeg", "Daucé", "karak.dauce@gmail.com")),
        new Task(3, "Tache 3", true, "description")
    ]

    getAllTasks(): Task[] {
        return this.tasks;
    }

    modifyDoneTask(task: Task): void {
        this.tasks.find((taskArray) => {
            taskArray.id === task.id ? taskArray.done = !taskArray.done : taskArray.done = taskArray.done;
          });
    }

    deleteTask(task:Task): void {
        this.tasks.forEach((taskArray, index) => {
            if (taskArray.id === task.id) this.tasks.splice(index, 1);
        })
    }

    addTask(formValue: {name: string, description: string, done: boolean, user?: string}): void {
        this.tasks.push(new Task(0, formValue.name, formValue.done, formValue.description, new User(0, "Tanguy", "Budor", 'tanguy.budor@gmail.com')));
    }
}