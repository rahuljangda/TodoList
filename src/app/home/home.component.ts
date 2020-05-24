import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() selectedType = new EventEmitter<number>();
  constructor() { }
  type:number = 0

  ngOnInit() {
  }

  SelectType(type:number) {
    // this.type = type;
    this.selectedType.emit(type);
  }

}
