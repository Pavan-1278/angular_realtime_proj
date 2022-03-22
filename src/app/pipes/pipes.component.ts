import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  title='demo_abc';
  today_date= new Date();
  demo_json= {
    name: "Praveen",
    age: 25,
    address: {
      address1: " Telangana ",
      address2: " India "
    }
  }
  months= ['Jan','Feb','Mar','Apr','May','Jun'];

  constructor() { }

  ngOnInit(): void {
  }

}
