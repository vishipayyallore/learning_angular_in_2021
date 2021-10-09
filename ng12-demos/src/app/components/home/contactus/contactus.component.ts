import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sv-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactUsComponent implements OnInit {

  pageTitle = 'Contact Us';
  
  constructor() { }

  ngOnInit(): void {
  }

}
