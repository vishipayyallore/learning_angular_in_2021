import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sv-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  pageTitle = 'Contact Us';
  //dummy data
  selectedData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  constructor() { }

  ngOnInit(): void {
  }

}
