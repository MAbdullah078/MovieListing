import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  sub: any;
  movieId: any;
  movies: any;
  movieData: any;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams
      .subscribe(params => {
        this.movieId = params['mid'] || '0';
      })
    this.httpClient.get("assets/movies.json").subscribe((data: any) => {
      this.movies = data;
      this.movies = this.movies.filter((res: any) => res.id == this.movieId)
      this.movieData = this.movies[0]

    })
  }
  goBack() {
    this.router.navigate(['/'])
  }
}


