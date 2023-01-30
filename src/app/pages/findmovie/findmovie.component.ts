import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/utils/interfaces';
import { faEdit,faTrash,faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-findmovie',
  templateUrl: './findmovie.component.html',
  styleUrls: ['./findmovie.component.css']
})
export class FindmovieComponent implements OnInit {
  faEdit = faEdit;
  fadelete = faTrash
  fasearch =faSearch
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

  fetchMovies(): IMovie[] {
    let fietchedMovies: IMovie[] = JSON.parse(window.localStorage.getItem("movies") ?? "[]");

    return fietchedMovies;
  }

  public findMovie(e: any) {
    let value = e.target.value;
    if (value) {
      let filteredMovies = this.fetchMovies().filter((movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      });
      this.movies = filteredMovies;

    } else {
      this.movies = this.fetchMovies();
    }
  }
}
