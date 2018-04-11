import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  movieApiUrl: string = "";

  constructor(private http: HttpClient) { }

  onSearched(movie: string): Observable<any> {
    return this.http.get(this.movieApiUrl);
  }

}
