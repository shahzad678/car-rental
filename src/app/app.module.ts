import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { VehiclelistingComponent } from './components/vehiclelisting/vehiclelisting.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { ConfirmpasswordComponent } from './components/confirmpassword/confirmpassword.component';
import { CarRentdetailComponent } from './components/car-rentdetail/car-rentdetail.component';
import { RentCarPaymentComponent } from './components/rent-car-payment/rent-car-payment.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { HistoryComponent } from './components/history/history.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VehiclelistingComponent,
    ContactUsComponent,
    LoginComponent,
    SignupComponent,
    ForgotemailComponent,
    OtpVerificationComponent,
    ConfirmpasswordComponent,
    CarRentdetailComponent,
    RentCarPaymentComponent,
    FavouriteComponent,
    HistoryComponent,
    ProfileComponent,
   
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
