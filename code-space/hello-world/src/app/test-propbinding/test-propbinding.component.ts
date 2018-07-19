import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-propbinding',
  templateUrl: './test-propbinding.component.html',
  styleUrls: ['./test-propbinding.component.css']
})
export class TestPropbindingComponent implements OnInit {
  public myId = "testId";
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

}
