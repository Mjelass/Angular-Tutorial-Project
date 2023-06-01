import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  /*template: `<h1>Hello desde inline</h1>
  <p>Angular is awesom</p>
  `,*/
  styleUrls: ['./app.component.scss']
  //styles: [`h1 { color:red }`]
})
export class AppComponent {
  title = 'muApp';

  role= 'Users';
}
