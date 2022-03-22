import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() child_data = "";
  @Output() child_data2= new EventEmitter();
  message= "This is Child Data ";

  constructor() { }

  ngOnInit(): void {

  }

  sendMessage(){
    this.child_data2.emit(this.message);
  }
}
