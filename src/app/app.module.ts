import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyColorChanger1Directive } from './my-color-changer1.directive';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyArrayCheck1Directive } from './my-array-check1.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent1Component,
    MyColorChanger1Directive,
    MyComponent2Component,
    MyArrayCheck1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MyComponent1Component]
})
export class AppModule { }
