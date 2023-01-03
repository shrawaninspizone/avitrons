import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicdesigningComponent } from './graphicdesigning.component';

describe('GraphicdesigningComponent', () => {
  let component: GraphicdesigningComponent;
  let fixture: ComponentFixture<GraphicdesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicdesigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicdesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
