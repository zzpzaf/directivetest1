import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyColorChanger1]'
})
export class MyColorChanger1Directive {
  @Input() myDateTime: string | undefined;
  
  elRef: ElementRef;


  constructor(elemRef: ElementRef) {
    this.elRef = elemRef;
   }

   /*
    * AfterViewInit: It is the lifecycle hook that is called after a component view has been fully initialized. 
    * To use AfterViewInit, our class will implement it and override its method ngAfterViewInit(). 
   */
   ngAfterViewInit() {
    //this.chColor(this.elRef);
   }
    

   /* To respond to changes to the @Input() variables, uςε se the ngOnChanges() lifecycle hook.
    * Τηε Angular ngOnChanges is a lifecycle hook that is called when any data-bound property of a directive changes. 
    * It takes a changes argument of type SimpleChanges, that it also can be used.
    * 
    * Here we use our 'this.myDateTime' @Input property/variable.
   */
   ngOnChanges(changes: SimpleChanges) {
 

    let mcolor: string = "";
    mcolor = (new Date(this.myDateTime!).getSeconds() % 2 === 0) ? "red" : "yellow";
    this.chColor(mcolor);

   }

   chColor(putColor: string): void {
    this.elRef.nativeElement.style.backgroundColor = putColor;
   }

}

