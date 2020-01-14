import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  title:string;
  name:string;
  doj:Date;

  constructor() { 
    this.title = "Manager";
    this.name = "Shiva Sai";
    this.doj = new Date();
  }

  ngOnInit() {
  }

}
