import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
  // JSON array
    return [
      {"id":1,"name":"mangesh","age":29},
      {"id":2,"name":"david","age":48},
      {"id":3,"name":"charles","age":38},
      {"id":4,"name":"ajay","age":25}
    ];
  }
}
