import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdevelopmentComponent } from './appdevelopment.component';

describe('AppdevelopmentComponent', () => {
  let component: AppdevelopmentComponent;
  let fixture: ComponentFixture<AppdevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
