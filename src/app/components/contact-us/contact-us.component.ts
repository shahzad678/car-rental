import { Component } from '@angular/core';
import {faHeart , faStar  , faLocationPin ,faCodeMerge ,faMobile , faEnvelope} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  faMobile=faMobile ; faEnvelope=faEnvelope ;faCodeMerge=faCodeMerge ;faLocationPin=faLocationPin
  constructor(){}
}
