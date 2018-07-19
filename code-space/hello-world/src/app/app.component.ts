import { Component } from '@angular/core';

// defines this class as a NG component 
// selector : alias for this component to be used in a template/HTML
// the slector tag will be replaced by the template of this component, templateUrl is specified
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world!';
}
