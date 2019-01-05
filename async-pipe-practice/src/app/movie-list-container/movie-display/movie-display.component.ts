import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy, DoCheck, OnChanges } from '@angular/core';
import { Movie } from '../movie';
import { Observable, BehaviorSubject } from 'rxjs';
import { MovieService } from '../movie-service.service';
@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDisplayComponent implements OnInit, DoCheck {
  @Input() movies$: Movie[];
  displayMovies;
  constructor(private movieSvc: MovieService) { }

  ngOnInit() {
  }
  ngDoCheck() {
  }
  public selectMovie(movie: Movie) {
    this.movieSvc.selectMovie(movie);
  }
}
