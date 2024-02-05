import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, TodoListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
