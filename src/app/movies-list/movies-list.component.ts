import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: any = [];
  moviesSearch: string = "";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.httpClient.get("assets/movies.json").subscribe(data => {
      this.movies = data;
    })
  }

  search(event: any) {
    this.moviesSearch = event.target.value
    if (event.target.value.length != 0) {
      this.httpClient.get("assets/movies.json").subscribe((data: any) => {
        this.movies = data.filter((res: any) => res.name.includes(this.moviesSearch))
      })
    }
    else {
      this.getList();
    }
  }
}
