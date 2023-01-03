import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolicComponent } from './privacypolic.component';

describe('PrivacypolicComponent', () => {
  let component: PrivacypolicComponent;
  let fixture: ComponentFixture<PrivacypolicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacypolicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacypolicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
