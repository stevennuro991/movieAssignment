import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/utils/interfaces';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css'],
})
export class AllmoviesComponent implements OnInit {
  faEdit = faEdit;
  fadelete = faTrash
  public movies: IMovie[] = [];

  constructor(
    private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    let movies = window.localStorage.getItem("movies");
    if (movies) {
      let newMovies: IMovie[] = JSON.parse(
        movies
      )
      this.movies = newMovies
    }

  }



  public removeMovie(id: number) {
    let movies = this.movies.filter((movie) => movie.id !== id);
    window.localStorage.setItem("movies", JSON.stringify(movies));
    this.movies = movies;
  }

  fetchMovies(): IMovie[] {
    let fietchedMovies: IMovie[] = JSON.parse(window.localStorage.getItem("movies") ?? "[]");

    return fietchedMovies;
  }

  public editMovie(id: number) {
    this.router.navigate([`/editMovies/${id}`]);
  }
}
