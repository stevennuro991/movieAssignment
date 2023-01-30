import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css'],
})
export class EditmovieComponent implements OnInit {
  public id;
  public selectedMovie?: IMovie;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];

    this.selectedMovie = this.findMovie(this.id);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.selectedMovie = this.findMovie(this.id);
    });
  }

  fetchMovies(): IMovie[] {
    let fietchedMovies: IMovie[] = JSON.parse(
      window.localStorage.getItem('movies') ?? '[]'
    );

    return fietchedMovies;
  }

  findMovie(id: number): IMovie | undefined {
    let movies = this.fetchMovies();
    let movie = movies.find((movie) => movie.id === id);

    return movie;
  }
}
