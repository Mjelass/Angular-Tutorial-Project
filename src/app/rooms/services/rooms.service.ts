import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/app/environments/environment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config : AppConfig,
  private http: HttpClient) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized...');

  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Kichen',
      price: 500,
      photos: 'https://media.istockphoto.com/id/1425461534/es/foto/mano-de-mujer-sosteniendo-una-botella-de-pl%C3%A1stico-vac%C3%ADa-para-tirarla.jpg?s=2048x2048&w=is&k=20&c=DV4CHF1tjulXyCBsMRDt2xqD8clM5zsVTGlNW4l6jk4=',
      chekinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('20-Nov-2024')
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Kichen',
      price: 1000,
      photos: 'https://media.istockphoto.com/id/1425461534/es/foto/mano-de-mujer-sosteniendo-una-botella-de-pl%C3%A1stico-vac%C3%ADa-para-tirarla.jpg?s=2048x2048&w=is&k=20&c=DV4CHF1tjulXyCBsMRDt2xqD8clM5zsVTGlNW4l6jk4=',
      chekinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('20-Nov-2024')
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Kichen',
      price: 15000,
      photos: 'https://media.istockphoto.com/id/1425461534/es/foto/mano-de-mujer-sosteniendo-una-botella-de-pl%C3%A1stico-vac%C3%ADa-para-tirarla.jpg?s=2048x2048&w=is&k=20&c=DV4CHF1tjulXyCBsMRDt2xqD8clM5zsVTGlNW4l6jk4=',
      chekinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('20-Nov-2024')
    }
  ]

  getRooms() {
    return this.roomList;
  }
}
