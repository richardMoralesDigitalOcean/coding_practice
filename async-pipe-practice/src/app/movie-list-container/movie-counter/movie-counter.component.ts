import { Component, OnInit, Input,
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-movie-counter',
  templateUrl: './movie-counter.component.html',
  styleUrls: ['./movie-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MovieCounterComponent implements OnInit {
  @Input () numMovies;

  constructor() { }

  ngOnInit() {
  }

}
