import { Component, OnInit } from '@angular/core';
import{Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(private geolocation:Geolocation){}
  private mapUrl: string;
  private success(position: Position){
    this.mapUrl='http://maps.google.com/maps?q='+position.coords.latitude+","+position.coords.latitude;
    console.log(this.mapUrl);
  }
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
    this.mapUrl='http://maps.google.com/maps?q='+resp.coords.latitude+","+resp.coords.longitude;
    console.log(this.mapUrl);
    }).catch((error) => {
    console.log('Error getting location', error);
});
  }
  ngOnInit(){
    this.getLocation();
  } 
}
