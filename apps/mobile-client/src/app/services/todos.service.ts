import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

export type CreateTodo = Omit<Todo, '_id'>;

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.backendBaseUrl}/todos`);
  }

  addTodo(todo: CreateTodo): Observable<Todo> {
    return this.http.post<Todo>(`${environment.backendBaseUrl}/todos`, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(
      `${environment.backendBaseUrl}/todos/${todo._id}`,
      todo
    );
  }

  removeTodo(todo: Todo): Observable<void> {
    return this.http.delete<void>(
      `${environment.backendBaseUrl}/todos/${todo._id}`
    );
  }
}
