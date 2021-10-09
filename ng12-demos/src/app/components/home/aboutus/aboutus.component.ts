import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sv-aboutus',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss']
})
export class AboutUsComponent implements OnInit {

    pageTitle = 'About Us';

    constructor() { }

    ngOnInit(): void {
    }

}
