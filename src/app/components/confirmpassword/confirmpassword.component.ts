import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent {
constructor(private router:Router){}
  usersloginform(data?:any){
    console.log(data)
    localStorage.setItem('buyer',JSON.stringify(data));
    this.router.navigate(['/home'])
    
    }
  
}
