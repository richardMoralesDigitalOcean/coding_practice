import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCounterComponent } from './movie-counter.component';

describe('MovieCounterComponent', () => {
  let component: MovieCounterComponent;
  let fixture: ComponentFixture<MovieCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
