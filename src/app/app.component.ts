import { Component ,OnInit} from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   let movies = window.localStorage.getItem("movies");
   if (!movies){
    window.localStorage.setItem("movies",JSON.stringify([
      {
        id :1,
        title:"Bradley",
        date : "2022-01-01",
        category:"Action"
      }
    ]))
   }
  }
  title = 'movieApp';
  filmIcon =faFilm;
}
