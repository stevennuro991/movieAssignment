import { Component } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
}

export const buttons: RouteInfo[] = [
  {
    path:  "/addMovies",
    title: "Add Movies",
  },
  {
    path: "",
    title: "All Movies",
    
  },
  {
    path: "/findMovies",
    title: "Find Movies",
  }
 

]
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  SelectedFruit: string = 'By Title';
  changeFruit(fruit: string) {
    this.SelectedFruit = fruit;
  }
  menuItems: any[] = [];
  isCollapsed: boolean = true;
  constructor() {}

  ngOnInit() {
    this.menuItems = buttons;
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
