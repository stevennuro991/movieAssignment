import { Routes } from "@angular/router";
import { AddmovieComponent } from "src/app/pages/addmovie/addmovie.component";
import { AllmoviesComponent } from "src/app/pages/allmovies/allmovies.component";
import { FindmovieComponent } from "src/app/pages/findmovie/findmovie.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const MovieLayoutRoutes: Routes = [
  { path: "", component: AllmoviesComponent  },
  { path: "addMovies", component: AddmovieComponent},
  { path: "findMovies", component: FindmovieComponent}, 
 // { path: "rtl", component: RtlComponent }
];
