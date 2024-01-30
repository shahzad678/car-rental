import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {} from '@fortawesome/free-solid-svg-icons'
import {faUser , faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType = "default"
  faUser=faUser ; faChevronCircleDown=faChevronCircleDown
  constructor(private router:Router){}
  
  ngOnInit(): void {
  this.router.events.subscribe((result)=>{
    if(result){
      if(localStorage.getItem('buyer')){
        this.menuType= 'buyer'
      } else {
        this.menuType = 'default'
      }
    }
  }) 
  }
  
  logoutbutton(){
    if(localStorage.getItem('buyer')){
      localStorage.removeItem('buyer') ;
      this.router.navigate(['/'])
    }
  }
}
