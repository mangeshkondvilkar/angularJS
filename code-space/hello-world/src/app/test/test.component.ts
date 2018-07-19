import { Component, OnInit } from '@angular/core';

// 3 ways to define selector
// 1. 'app-test' -> use it as a html tag in template html: <app-test></app-test>
// 2. '.app-test' -> use it as a class attribute: <div class="app-test">
// 3. '[app-test]' -> use it as a tag attribute: <div app-test> 
// inline templates and styles. Instead of defining a teplate and CSS in new files
// you can have inline html and css within the decoreator def or @compoenent
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // inline template
  // template:'<div>Inline template</div>',
  // inline template with multilevel code
 /* template: `
  <div>
    <h2>This is a multiline inline template</h2>
  </div>
  `,*/
  styleUrls: ['./test.component.css']
  // inline CSS
  // styles: ['div {color: red}']
 /* styles:[
    ` div {
        color: blue;
      }
    `]
  */
})
export class TestComponent implements OnInit {
  public name = "Mangesh from variable"
  public siteUrl = window.location.href;

  public date = new Date();

  constructor() { }
  ngOnInit() {
  }

  /**
   * name
   */
  public greetUser() {
    return "Hello " + this.name;
  }
}
