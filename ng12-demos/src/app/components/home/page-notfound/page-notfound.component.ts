import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sv-page-notfound',
    templateUrl: './page-notfound.component.html',
    styleUrls: ['./page-notfound.component.scss']
})
export class PageNotFoundComponent implements OnInit {

    pageTitle = 'Page Not Found';

    constructor() { }

    ngOnInit(): void {
    }

}
