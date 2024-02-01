import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAllItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
  }

  addItem(title: string): Observable<Todo> {
    const todo: Omit<Todo, '_id'> = {
      title,
      completed: false,
    };

    return this.http.post<Todo>(`${this.apiUrl}/todos`, todo);
  }

  updateItem(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.apiUrl}/todos/${todo._id}`, todo);
  }

  removeItem(todo: Todo): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/todos/${todo._id}`);
  }
}
