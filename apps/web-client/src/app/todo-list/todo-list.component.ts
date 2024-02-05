import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodosService, Todo } from '../todos.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, AddTodoComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class TodoListComponent implements OnInit {
  todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todosService
      .getAllItems()
      .subscribe((todos) => this.todos$.next(todos));
  }

  removeTodo(todo: Todo): void {
    this.todosService.removeItem(todo).subscribe(() => this.loadTodos());
  }

  updateTodo(todo: Todo): void {
    this.todosService.updateItem(todo).subscribe(() => this.loadTodos());
  }

  addTodo(title: string): void {
    this.todosService.addItem(title).subscribe(() => this.loadTodos());
  }
}
