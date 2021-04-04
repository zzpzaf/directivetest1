import { Directive, ElementRef, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyArrayCheck1]'
})

export class MyArrayCheck1Directive {
  
  private viewCreated: boolean = false;
  private  elRef!: ElementRef;

  constructor(private myTemplateRef: TemplateRef<any>, 
              private myViewContainer: ViewContainerRef) { 
                
  }

  @Input() set appMyArrayCheck1(theArray: number[]) {
    let n: number = theArray.length;
    let res: number = this.arraySortCheck(theArray, n);
    if ( res != 0  && !this.viewCreated) {
      this.myViewContainer.createEmbeddedView(this.myTemplateRef)
      this.viewCreated = true;
    } else if (res == 0 && this.viewCreated) {
      this.myViewContainer.clear();
      this.viewCreated = false;
    }

  }




  // This is a recursive function that returns 0 if a pair is found unsorted
  arraySortCheck(arr: number[], n: number): number {

        // Array has one or no element or the
        // rest are already checked and approved.
        if (n == 1 || n == 0)
            return 1;
 
        // Unsorted pair found (Equal values allowed)
        if (arr[n - 1] < arr[n - 2])
            return 0;
 
        // Last pair was sorted
        // Keep on checking
        return this.arraySortCheck(arr, n - 1);

  }

  // ngAfterViewInit() {
    // this.elRef.nativeElement.style.backgroundColor="red";
    // console.log(this.elRef.nativeElement)
    // this.hdr.nativeElement.style.backgroundColor = "yellow";
  // }

}


