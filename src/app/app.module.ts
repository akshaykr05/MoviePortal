import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { DashboardMovieComponent } from './components/dashboard-movie/dashboard-movie.component';
import { MovieSearchComponent } from './components/dashboard-movie/movie-search/movie-search.component';
import { SearchService } from './services/search.service';
import { MovieDetailComponent } from './components/dashboard-movie/movie-detail/movie-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMovieComponent,
    MovieSearchComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
