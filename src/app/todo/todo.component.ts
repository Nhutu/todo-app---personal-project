import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoModel } from '../todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo!: TodoModel;

  @Output()
  deleteTriggered: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();

  @Output()
  doneTriggered: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();

  constructor() { }

  ngOnInit(): void {
  }

  todoDone(): void {
    this.doneTriggered.emit(this.todo);
  }

  deleteTodo(): void {
    this.deleteTriggered.emit(this.todo);
  }

}
