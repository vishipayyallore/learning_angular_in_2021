import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInAndOfComponent } from './for-in-and-of.component';

describe('ForInAndOfComponent', () => {
  let component: ForInAndOfComponent;
  let fixture: ComponentFixture<ForInAndOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForInAndOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInAndOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
