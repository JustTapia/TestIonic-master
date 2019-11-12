import { Component, OnInit } from '@angular/core';
import{Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private mapUrl: string;
  constructor(private geolocation: Geolocation){}
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.mapUrl ='http://maps.google.com/maps?q='+resp.coords.latitude+","+resp.coords.longitude;
      console.log(this.mapUrl);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  ngOnInit(){
    this.getLocation();
  } 
}
