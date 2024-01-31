import { Injectable } from '@angular/core';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos: Todo[] = [
    { id: '1', title: 'Learn Mantis', completed: false },
    { id: '2', title: 'Ship awesome fullstack apps', completed: false },
    { id: '3', title: 'Tell all my friends about it', completed: false },
  ];

  addItem(title: string): void {
    const todo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    this.todos.push(todo);
  }

  removeItem(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
