import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewayDatabindingComponent } from './oneway-databinding.component';

describe('OnewayDatabindingComponent', () => {
  let component: OnewayDatabindingComponent;
  let fixture: ComponentFixture<OnewayDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnewayDatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
