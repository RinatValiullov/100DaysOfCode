import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  countClickUp() {
    this.clickCounter++;
  }

  countClickDown() {
    this.clickCounter--;
  }

  setClasses() {
    let myClasses = {
      active: this.clickCounter >= 4,
      notactive: this.clickCounter < 4,
    }
    return myClasses;
  }

}
