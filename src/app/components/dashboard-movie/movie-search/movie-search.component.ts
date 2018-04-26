import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Movie } from '../../../shared/models/movie';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchedMovie: string = '';
  movies: Array<any>;
  movie: any;
  movieList: AngularFireList<any>;
  defaultPage = 1;

  constructor(private searchService: SearchService, private firebase: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSearch(searchedMovie: string) {
    this.searchService.onSearched(searchedMovie)
      .subscribe(data => {
        this.movies = data.results;
      });
  }

  onAddFav(movie) {
    const newBook = new Movie();
    let book= newBook.$key;

    this.movieList.push(newBook);
    // this.movieList.push(
    //   movie
    //   // id: movie.id,
    //   // poster_path: movie.poster_path,
    //   // title: movie.title,
    //   // release_date: movie.release_date,
    //   // overview: movie.overview,
    //   // genres: movie.genres,
    //   // // production_companies: movie.production_companies,
    //   // // spoken_languages: movie.spoken_languages,
    //   // vote_average: movie.vote_average,
    //   // // status: movie.status
    // );
    // console.log(this.btn_fav.nativeElement.value);
    console.log(movie);
  }
}
