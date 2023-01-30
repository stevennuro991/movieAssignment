import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AllmoviesComponent } from "src/app/pages/allmovies/allmovies.component";
import { FindmovieComponent } from "src/app/pages/findmovie/findmovie.component";
import { MovieLayoutRoutes } from "./movie-layout.routing";
import { AddmovieComponent } from "src/app/pages/addmovie/addmovie.component";

// import { RtlComponent } from "../../pages/rtl/rtl.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MovieLayoutRoutes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AllmoviesComponent,
    FindmovieComponent,
    AddmovieComponent,
  ]
})
export class MovieLayoutModule {}
