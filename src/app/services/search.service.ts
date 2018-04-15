import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  apiKey:string= "api_key=de20353216fee7069a7226584ed84648";
  movieApiUrl: string = "https://api.themoviedb.org/3/search/movie?api_key=de20353216fee7069a7226584ed84648&query=";
  movieUrl: string = "https://api.themoviedb.org/3/movie/";
  constructor(private http: HttpClient) { }

  onSearched(movie: string): Observable<any> {
    return this.http.get(this.movieApiUrl+movie);
  }

  getMovie(movieId) {
    return this.http.get(this.movieUrl+movieId+'?'+this.apiKey);
  }

}
