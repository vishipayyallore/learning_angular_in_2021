import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  title: string;
  name: string;
  doj: Date;

  constructor() {
    this.title = "Manager";
    this.name = "Shiva Sai";
    this.doj = new Date();
  }

  ngOnInit() {
  }

}
