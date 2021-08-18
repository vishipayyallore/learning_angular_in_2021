import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDemoComponent } from './selector-demo.component';

describe('SelectorDemoComponent', () => {
  let component: SelectorDemoComponent;
  let fixture: ComponentFixture<SelectorDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
