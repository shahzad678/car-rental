import { Component } from '@angular/core';
import {faHeart , faTrain ,faGear ,faUser} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-vehiclelisting',
  templateUrl: './vehiclelisting.component.html',
  styleUrls: ['./vehiclelisting.component.css']
})
export class VehiclelistingComponent {
  faHeart=faHeart ;
  faTrain=faTrain ;faGear=faGear ;faUser=faUser  
constructor(){}
}

