import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  usersloginform(data:any){
    console.log(data)
    localStorage.setItem('buyer',JSON.stringify(data));
    this.router.navigate(['/home'])
    }
}
