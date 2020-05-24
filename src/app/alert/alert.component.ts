import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ErrorMessage: string = '';
  enableMessage: boolean = false;

  ngOnInit() {
  }

  displayError(error:any) {
    this.enableMessage = true;
    this.ErrorMessage = error.message;
  }

}
