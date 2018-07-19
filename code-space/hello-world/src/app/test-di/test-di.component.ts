import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test-di',
  templateUrl: './test-di.component.html',
  styleUrls: ['./test-di.component.css']
})
export class TestDiComponent implements OnInit {

  public employees = [];
  // inject employeeSevice through constructor. Below is the shorthand
  // you can define the variable above and use it in constructor
  constructor(private _employeeService: EmployeeService) { }
  // now get the data onNgInit lifecycle hook
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
