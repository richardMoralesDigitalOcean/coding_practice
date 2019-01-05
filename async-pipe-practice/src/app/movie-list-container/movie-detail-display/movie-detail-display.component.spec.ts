import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailDisplayComponent } from './movie-detail-display.component';

describe('MovieDetailDisplayComponent', () => {
  let component: MovieDetailDisplayComponent;
  let fixture: ComponentFixture<MovieDetailDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
