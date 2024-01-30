import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehiclelistingComponent } from './components/vehiclelisting/vehiclelisting.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { ConfirmpasswordComponent } from './components/confirmpassword/confirmpassword.component';
import { CarRentdetailComponent } from './components/car-rentdetail/car-rentdetail.component';
import { RentCarPaymentComponent } from './components/rent-car-payment/rent-car-payment.component';
import { HistoryComponent } from './components/history/history.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'vehiclelisting',component:VehiclelistingComponent} ,
{path:'contact-us',component:ContactUsComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent} ,
{path:'forgotemail',component:ForgotemailComponent},
{path:'otpverification', component:OtpVerificationComponent},
{path:'confirmpassword',component:ConfirmpasswordComponent},
{path:'carrentdetail',component:CarRentdetailComponent},
{path:'pymentrentcar',component:RentCarPaymentComponent},
{path:'history',component:HistoryComponent},
{path:'favourite',component:FavouriteComponent},
{path:'profile',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
