import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { UserComponent } from './user/user.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task/new-task.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SingleTaskComponent,
    UserComponent,
    ListTasksComponent,
    HeaderComponent,
    NewTaskComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
