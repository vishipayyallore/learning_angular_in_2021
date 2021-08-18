import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosLandingComponent } from './demos-landing.component';

describe('DemosLandingComponent', () => {
  let component: DemosLandingComponent;
  let fixture: ComponentFixture<DemosLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemosLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
