import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  faTrash = faTrash;
  constructor() { }

  @Input()
  todo!: Todo;

  @Output()
  onTodoDeleteClick = new EventEmitter<Todo>();

  ngOnInit(): void {
  }

  toggleIsComplete(): void {
    this.todo.isComplete = !this.todo.isComplete;
  }

  emitDeleteClick() {
    this.onTodoDeleteClick.emit(this.todo);
  }

}
