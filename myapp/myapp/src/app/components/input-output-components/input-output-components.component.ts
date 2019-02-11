import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-input-output-components',
  templateUrl: './input-output-components.component.html',
  styleUrls: ['./input-output-components.component.css']
})
export class InputOutputComponentsComponent implements OnInit, OnChanges, OnDestroy {
  @Input () userName: string;
  @Output () userNameChange = new EventEmitter();
  @ViewChild('addUserForm') form: NgForm;
  public users = [];
  public newUser = {
    name: '',
    age: ''
  };
  constructor() { }
  ngOnChanges(changes) {
    console.log('some changes');
    console.log(changes);
  }
  ngOnInit() {
    console.log('init component');
  }
  ngOnDestroy() {
    console.log('destroy');
  }
  getData() {
    console.log('get data');
    this.getData();
  }
  onClickHandler() {
    console.log('click');
    this.userNameChange.emit('some value');
  }
  onSubmitHandler() {
    this.users.push(Object.assign({}, this.newUser));
    console.log(this.form);
    console.log(this.users);
    this.form.resetForm();
  }
}
