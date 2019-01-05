import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieService } from './movie-list-container/movie-service.service';
import { AppComponent } from './app.component';
import { MovieCounterComponent } from './movie-list-container/movie-counter/movie-counter.component';
import { MovieDisplayComponent } from './movie-list-container/movie-display/movie-display.component';
import { MovieListContainerComponent } from './movie-list-container/movie-list-container.component';
import { MovieDetailDisplayComponent } from './movie-list-container/movie-detail-display/movie-detail-display.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieCounterComponent,
    MovieDisplayComponent,
    MovieListContainerComponent,
    MovieDetailDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
