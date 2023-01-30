import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css']
})
export class DropdownButtonComponent implements OnInit {
  @Input() Items: string[] = ['Item 1', 'Item 2',];
  @Input() SelectedItem: string = 'Item 1';
  @Output() OnChange: EventEmitter<string> = new EventEmitter<string>();
  Show: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  toggle() {
    this.Show = !this.Show;
  }
  select(item: string) {
    this.SelectedItem = item;
    this.OnChange.emit(this.SelectedItem);
    this.toggle();
  }
}