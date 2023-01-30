import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieLayoutComponent} from "./layouts/movie-layout/movie-layout.component";
const routes: Routes = [
  {
    path: "",
    component: MovieLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:()=>import('./layouts/movie-layout/movie-layout.module').then(m=>m.MovieLayoutModule)
      }
    ]
  },
  
  {
    path: "addMovies",
    redirectTo: "addMovies"
  },
  // 
  //  {
  //   path: "",
  //   component: AuthorizerLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren:()=>import('./layouts/authorizer-layout/authorizer-layout.module').then(m=>m.AuthorizerLayoutModule)
  //     }
  //   ]
  // }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
