import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  title = 'Room List';

  roomList: RoomList[] = []

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;


  constructor( private roomsService : RoomsService ) { }

  ngAfterViewChecked(): void {

  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    console.log(this.headerChildrenComponent.last.title = 'last title');
  }
  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms()
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;

  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Kichen',
      price: 500,
      photos: 'https://media.istockphoto.com/id/1425461534/es/foto/mano-de-mujer-sosteniendo-una-botella-de-pl%C3%A1stico-vac%C3%ADa-para-tirarla.jpg?s=2048x2048&w=is&k=20&c=DV4CHF1tjulXyCBsMRDt2xqD8clM5zsVTGlNW4l6jk4=',
      chekinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('20-Nov-2024')
    }

    this.roomList = [...this.roomList, room]
  }



}
