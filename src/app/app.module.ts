import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MovieDashboardComponent } from './shared/component/IOmovies-CRUD/movie-dashboard/movie-dashboard.component';
import { MovieListComponent } from './shared/component/IOmovies-CRUD/movie-list/movie-list.component';
import { MovieFormComponent } from './shared/component/IOmovies-CRUD/movie-form/movie-form.component';
import { StudentDashboardComponent } from './shared/component/IOstudent-CRUD/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/IOstudent-CRUD/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/IOstudent-CRUD/student-table/student-table.component';
import { TodoDashboardComponent } from './shared/component/IOtodo-CRUD/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './shared/component/IOtodo-CRUD/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/component/IOtodo-CRUD/todo-form/todo-form.component';
import { PostDashboardComponent } from './shared/component/IOpost-CRUD/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/component/IOpost-CRUD/post-card/post-card.component';
import { PostFormComponent } from './shared/component/IOpost-CRUD/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    MovieListComponent,
    MovieFormComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoFormComponent,
    PostDashboardComponent,
    PostCardComponent,
    PostFormComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
