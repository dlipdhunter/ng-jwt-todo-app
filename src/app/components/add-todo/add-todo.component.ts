import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  faPlus = faPlus;

  addForm = this.formBuilder.group({
    todoText: [null, [Validators.required]]
  });

  @Output() onAddTodo = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
        
  }

  onAdd(): void {
    if(this.addForm.invalid) {
      return;
    }

    const text = this.todoText?.value;
    this.onAddTodo.next(text);

    this.addForm.reset();
  }

  get todoText() {
    return this.addForm.get("todoText");
  }
}
