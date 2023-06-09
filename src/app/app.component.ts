import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  /*template: `<h1>Hello desde inline</h1>
  <p>Angular is awesom</p>
  `,*/
  styleUrls: ['./app.component.scss']
  //styles: [`h1 { color:red }`]
})
export class AppComponent implements OnInit {


  title = 'muApp';

  role= 'Users';

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50
  // }

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Holiii';
    
  }

  constructor(@Inject(LocalStorageToken) private localStorage: any){
    this.localStorage.setItem('name', 'Hilton Hotel')
  }

}
