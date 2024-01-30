import { Component } from '@angular/core';
import {faHeart , faTrain ,faGear ,faUser} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  faHeart=faHeart ; faTrain=faTrain ;faGear=faGear ;faUser=faUser
}
