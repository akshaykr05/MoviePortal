import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  @ViewChild('btn_fav') btn_fav: ElementRef;
  searchedMovie: string = '';
  movies: Array<any>;
  movie: any;
  defaultPage= 1;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  
  onSearch(searchedMovie: string){
    this.searchService.onSearched(searchedMovie)
                        .subscribe(data=> {
                          this.movies = data.results;
                        });
  }

  onAddFav(movie) {
    console.log(this.btn_fav.nativeElement);
    console.log(movie);
  }
}
