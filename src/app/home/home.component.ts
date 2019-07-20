import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = 'type anything';

  constructor() { }

  ngOnInit() {}

  countClick() { this.clickCounter += 1; }

  setCounterClass() {
    const counterClasses = {
      active: this.clickCounter > 4,
      deactive: this.clickCounter <= 4
    };

    return counterClasses;
  }

}
