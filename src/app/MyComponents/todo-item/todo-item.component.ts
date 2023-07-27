import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo();
  @Input() i: Number = new Number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheck: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
  }

  onCheckboxClick(todo: Todo) {
    this.todoCheck.emit(todo);
  }

}










