import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos = [];
  onTodoChangeHandler(value) {
    this.todos.push(Object.assign({}, value));
    console.log(this.todos);
  }
}
