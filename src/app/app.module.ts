import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardMovieComponent } from './components/dashboard-movie/dashboard-movie.component';
import { MovieSearchComponent } from './components/dashboard-movie/movie-search/movie-search.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardMovieComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
