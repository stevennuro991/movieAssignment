import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/utils/interfaces';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.css'],
})
export class AllmoviesComponent implements OnInit {
  faEdit = faEdit;
  fadelete = faTrash
  public movies: IMovie[] = [];
  ngOnInit(): void {
    let movies = window.localStorage.getItem("movies");
    if (movies) {
      let newMovies: IMovie[] = JSON.parse(
        movies
      )
      this.movies = newMovies
    }

  }
  public removeMovie() {
    localStorage.removeItem('movies');
}
}
