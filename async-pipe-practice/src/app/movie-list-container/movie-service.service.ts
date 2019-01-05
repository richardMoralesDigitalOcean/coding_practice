import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Movie } from './movie';
@Injectable()
export class MovieService {
  defaultMovieList: Movie[] = [
    {title: 'Batman Begins', price: 22.99, director: 'Director 1'},
    {title: 'Spiderman', price: 22.99, director: 'Director 2'},
    {title: 'Moneyball', price: 22.99, director: 'Director 3'},
    {title: 'Star Wars', price: 22.99, director: 'Director 4'},
    {title: 'Stargate', price: 22.99, director: 'Director 5'}
  ];
  private subject: BehaviorSubject<Movie> = new BehaviorSubject(null);
  selectedMovie$: Observable<Movie> = this.subject.asObservable();
  constructor() { }

  public getData(): Observable<Movie[]> {
    return of(this.defaultMovieList);
  }
  public addMovie(movie: Movie): Observable<Movie[]> {
    this.defaultMovieList.push(movie);
    return of(this.defaultMovieList);
  }
  public selectMovie(movie: Movie): void {
    this.subject.next(movie);
  }
}
