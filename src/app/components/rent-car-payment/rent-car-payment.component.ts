import { Component } from '@angular/core';
import {faHeart , faStar  , faTrain ,faGear ,faUser} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-rent-car-payment',
  templateUrl: './rent-car-payment.component.html',
  styleUrls: ['./rent-car-payment.component.css']
})
export class RentCarPaymentComponent {
  faHeart=faHeart ;faStar=faStar   ;

  faTrain=faTrain ;faGear=faGear ;faUser=faUser
  constructor(){}
}
