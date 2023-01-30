import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {
  public title: string = "";
  public category: string = "";
  public date: Date = new Date();

  constructor(
    private route: ActivatedRoute, private router: Router
  ) { }


  public addMovie() {

    if (this.title && this.category && this.date) {
      let movies = JSON.parse(window.localStorage.getItem("movies") ?? "[]");
      movies.push({
        title: this.title,
        category: this.category,
        date: this.date,
        id: movies.length + 1
      });
      window.localStorage.setItem("movies", JSON.stringify(movies));
      this.title = "";
      this.category = "";
      this.date = new Date();

      this.router.navigate(["/"]);
    }
  }


}
