import { Component } from '@angular/core';
import { TodoModel } from './todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  newTodoText!: string;
  todos: TodoModel[] = [];
  todosDone: number = 0;

  addTodo(): void {
    if (this.newTodoText) {
      this.todos.push({
        text: this.newTodoText,
        isChecked: false
      });
      this.newTodoText = "";
    } else {
      alert('Aucun texte saisi');
    }
  }

  todoDone(todo: TodoModel): void {
    this.todosDone += todo.isChecked ? -1 : 1;
    todo.isChecked = !todo.isChecked;
  }

  deleteTodo(todo: TodoModel): void {
    let index = this.todos.findIndex(t => {
      return t == todo;
    });

    if (index != -1) {
      this.todos.splice(index, 1);
      this.todosDone += todo.isChecked ? -1 : 0;
    } else {
      alert('Le todo n\'existe pas dans la liste !');
    }
  }
}
