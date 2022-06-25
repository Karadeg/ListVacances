import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, map, tap } from "rxjs";
import { Task } from "../models/task.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    tasks: Task[] = [];

    constructor (private http: HttpClient) {}

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>('http://localhost:9000/tasks');
    }

    getTaskById(taskId : number): Observable<Task> {
        return this.http.get<Task>(`http://localhost:9000/task/${taskId}`);
    }

    modifyDoneTask(taskId: number): Observable<Task> {
        return this.getTaskById(taskId).pipe(
            map(task => ({
                ...task,
                done: !task.done
            })),
            switchMap(updateTask => this.http.put<Task>(`http://localhost:9000/task/${taskId}`, updateTask))
        );
    }

    deleteTask(taskId: number): Observable<Task> {
        console.log(`http://localhost:9000/taskDelete/${taskId}`);
        return this.getTaskById(taskId).pipe(
            switchMap(() => this.http.delete<Task>(`http://localhost:9000/task/${taskId}`))
        );
    }

    addTask(formValue: {name: string, description: string, done: boolean, user?: string}): Observable<Task> {
        return this.getAllTasks().pipe(
            map(tasks => [...tasks].sort((a,b) => a.id - b.id)),
            map(sortedTasks => sortedTasks[sortedTasks.length - 1]),
            map(previousTask => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousTask.id + 1
            })),
            switchMap(newTask => this.http.post<Task>(
                `http://localhost:9000/task`,
                newTask)
            )
        )
    }
}