import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output () todoNameChange = new EventEmitter();
  @ViewChild('addUserForm') form: NgForm;
  public newTodo = {
    todo: ''
  };
  onSubmitHandler() {
    this.todoNameChange.emit(this.form.value);
    this.form.resetForm();
  }
  constructor() {}
  ngOnInit() {
  }
}


