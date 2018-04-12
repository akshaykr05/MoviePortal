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
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  
  onSearch(searchedMovie){
    this.searchService.onSearched(searchedMovie)
                        .subscribe(data=> {
                          this.movies = data.results;
                          console.log(data.results)
                        });
  }
}
