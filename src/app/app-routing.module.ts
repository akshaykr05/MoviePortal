import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './components/dashboard-movie/movie-search/movie-search.component';
import { MovieDetailComponent } from './components/dashboard-movie/movie-detail/movie-detail.component';
import { DashboardMovieComponent } from './components/dashboard-movie/dashboard-movie.component';

const routes: Routes = [
  {
    path: '', component: DashboardMovieComponent,
    children: [
      { path: '', component: MovieSearchComponent },
      { path: 'detail/:id', component: MovieDetailComponent }
    ]
  }
  // { path: 'detail/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
