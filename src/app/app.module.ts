import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieLayoutComponent } from './layouts/movie-layout/movie-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from "./components/components.module";
import { EditmovieComponent } from './pages/editmovie/editmovie.component';
@NgModule({
    declarations: [
        AppComponent,
        MovieLayoutComponent,
        EditmovieComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        RouterModule,
        ComponentsModule
    ]
})
export class AppModule { }
