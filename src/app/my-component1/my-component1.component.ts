import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component implements OnInit {

  
  curDate: Date = new Date();
  i: number = 1;  //interval in seconds
  interv: any;

  constructor() { 

    // Here, we use the DOM built-in setInterval method to repeat a function every 1 second 
    // The 'function' here is an anonymous one, setting up the current date-time with a new Date  
    // variable, every second
    this.interv = setInterval(() => {
      this.curDate = new Date();
    }, this.i*1000);

  }

  ngOnInit(): void {

  }

  dateRetDate() {}

  ngOnDestroy() {
    if (this.interv) {
      clearInterval(this.interv);
    }
  }

}
