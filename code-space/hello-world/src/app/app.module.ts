import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TestComponent} from './test/test.component';
import { TestPropbindingComponent } from './test-propbinding/test-propbinding.component';
import { TestDiComponent } from './test-di/test-di.component';

import {EmployeeService} from './employee.service';
// defines this class a NG module, declarations will contain all components which are part of this module
// boostrap: component to start
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestPropbindingComponent,
    TestDiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
