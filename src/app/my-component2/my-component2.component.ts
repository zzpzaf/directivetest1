import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css']
})
export class MyComponent2Component implements OnInit {

  myArray: number[] = [];
  sorted: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //console.log("======= 2nd Component =========");
    this.myArray = this.getInitArray();
  }
  
  getInitArray(): number[] {
    return [222, 3, 9, 6, 19, 5, 4, 17];
  } 

  sortTheArray(arr: number[]): number[]{
    return arr.sort((n1,n2) => n1 - n2);
  }  

  ToggleSortMyArray() :void{
    if (this.sorted == false) {
      this.myArray = this.sortTheArray(this.getInitArray());
    } else {
      this.myArray = this.getInitArray();
    }
    this.sorted = ! this.sorted;
    //console.log(this.myArray);
  }

}
