import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

  movie: any=null;
  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.onMovie(id);
  }

  onMovie(movieId: number) {
    this.searchService.getMovie(movieId)
      .subscribe(data => {
        this.movie = data;
      });
  }

}
