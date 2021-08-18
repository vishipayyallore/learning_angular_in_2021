import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabingingDemoComponent } from './databinging-demo.component';

describe('DatabingingDemoComponent', () => {
  let component: DatabingingDemoComponent;
  let fixture: ComponentFixture<DatabingingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabingingDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabingingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
