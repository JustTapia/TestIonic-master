import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {Geolocation} from '@ionic-native/geolocation';
import { HomePage } from './home.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MaterialModule,
  ],
  declarations: [HomePage],
  providers: [
  Geolocation
]
})
export class HomePageModule {}
