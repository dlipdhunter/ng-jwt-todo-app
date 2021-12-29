import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/todo";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      id: 1,
      text: "some text",
      isComplete: false
    },
    {
      id: 2,
      text: "some text 2",
      isComplete: false
    }];
  }

  addTodo(text: string): void {
    console.log(text);
    const newTodo: Todo = {
      id: this.todos.length + 1,
      text: text,
      isComplete: false
    };

    this.todos = [...this.todos, newTodo];
  }

  deleteTodo(todo: Todo): void {
    this.todos = this.todos.filter(x => x.id !== todo.id);
  }
}
