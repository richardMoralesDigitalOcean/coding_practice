import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MovieService } from '../movie-service.service';
import { Movie } from '../movie';
@Component({
  selector: 'app-movie-detail-display',
  templateUrl: './movie-detail-display.component.html',
  styleUrls: ['./movie-detail-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailDisplayComponent implements OnInit {
  selectedMovie;
  constructor(private movieSvc: MovieService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.movieSvc.selectedMovie$.subscribe((movie: Movie) => {
      this.selectedMovie = movie;
      this.cdr.detectChanges();
    });
  }

}
