import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {
  @Output() add = new EventEmitter<string>();

  title = '';

  addTodo() {
    if (this.title) {
      this.add.emit(this.title);

      // Reset title to clear input field.
      this.title = '';
    }
  }
}
