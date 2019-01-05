import { Component, ChangeDetectionStrategy,
  OnInit, DoCheck, OnChanges, ChangeDetectorRef } from '@angular/core';
import { MovieService } from './movie-service.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movie } from './movie';
import * as _ from 'lodash';

@Component({
  selector: 'app-movie-list-container',
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['../app.component.css', './movie-list-container.component.css']
})
export class MovieListContainerComponent implements OnInit, OnChanges, DoCheck {
  title = 'app';
  movies$: Observable<Movie[]>;
  numMovies: number;
  oNumMovies: number;
  moviesLatest: Movie[];
  constructor(private movieSvc: MovieService, private cd: ChangeDetectorRef) {
    this.movies$ = this.movieSvc.getData();
    this.movies$.subscribe(movies => {
      this.oNumMovies = movies.length;
    });
  }
  ngOnInit() {
  }
  ngOnChanges() {
  }
  ngDoCheck() {
    if (this.numMovies !== this.oNumMovies) {
      this.numMovies = this.oNumMovies;
    }
  }
  addMovie(movieTitle: string): void {
    const movie: Movie = {title: movieTitle, price: 22.99, director: `Director ${movieTitle}`};
    this.oNumMovies++;
    this.movies$ = this.movieSvc.addMovie(movie);
  }

}
