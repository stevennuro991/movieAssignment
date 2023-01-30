import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ButtonsComponent, DropdownButtonComponent],
  exports: [ButtonsComponent]
})
export class ComponentsModule {}
