import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sv-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  accordionContent!: Array<any>;

  constructor() { }

  ngOnInit(): void {

    this.accordionContent = [
      {
        headerTitle: 'Accordion Item #1',
        bodyText: `<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the
        overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
        this with custom CSS or overriding our default variables. It's also worth noting that just about any
        HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`
      },
      {
        headerTitle: 'Accordion Item #2',
        bodyText: `<strong>This is the second item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These classes
        control the overall appearance, as well as the showing and hiding via CSS transitions. You can
        modify any of this with custom CSS or overriding our default variables. It's also worth noting that
        just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit
        overflow.`
      }
    ];
  }

}
