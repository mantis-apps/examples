import { Component, inject } from '@angular/core';
import { Todo, TodosService } from '../todos.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, AddTodoComponent],
  templateUrl: './todo-list.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class TodoListComponent {
  private todosService = inject(TodosService);

  todos = this.todosService.todos;

  removeTodo(todo: Todo): void {
    this.todosService.removeItem(todo);
  }

  addTodo(title: string) {
    this.todosService.addItem(title);
  }
}
