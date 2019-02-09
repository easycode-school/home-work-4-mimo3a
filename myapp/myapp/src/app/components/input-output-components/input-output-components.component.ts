import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output-components',
  templateUrl: './input-output-components.component.html',
  styleUrls: ['./input-output-components.component.css']
})
export class InputOutputComponentsComponent implements OnInit {
  @Input () userName: string;
  @Output () userNameChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClickHandler() {
    console.log('click');
    this.userNameChange.emit('some value');
  }
}
