import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewTaskComponent } from "./new-task/new-task.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";

const routes: Routes = [
    { path: 'taskList', component: ToDoListComponent },
    { path: 'createTask/:done', component: NewTaskComponent },
    { path: '', component: ToDoListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}