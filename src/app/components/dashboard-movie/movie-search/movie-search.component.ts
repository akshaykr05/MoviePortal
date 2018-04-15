import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchedMovie: string = '';
  movies: Array<any>;
  movie: any;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  
  onSearch(searchedMovie: string){
    this.searchService.onSearched(searchedMovie)
                        .subscribe(data=> {
                          this.movies = data.results;
                        });
  }

  onMovie(movieId:number) {
    this.searchService.getMovie(movieId)
                        .subscribe(data=>{
                          this.movie=data;
                        });
  }
}
