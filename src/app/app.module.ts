import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardMovieComponent } from './components/dashboard-movie/dashboard-movie.component';
import { MovieSearchComponent } from './components/dashboard-movie/movie-search/movie-search.component';
import { SearchService } from './services/search.service';
import { FavMovieComponent } from './components/fav-movie/fav-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardMovieComponent,
    MovieSearchComponent,
    FavMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
