import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parent_data= "This is Parent Data."
  parent_data2= "";

  constructor() { }

  ngOnInit(): void {
  }
  receiveMessage($event: any){
    this.parent_data2= $event;
  }

}
