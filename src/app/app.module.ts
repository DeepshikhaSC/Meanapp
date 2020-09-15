import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './show/show.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UpdateComponent } from './update/update.component';
import { CategoriesComponent } from './categories/categories.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component'; 
 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ShowComponent,
    AdminloginComponent,
    UpdateComponent,
    CategoriesComponent,
    BookingdetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    
    RouterModule.forRoot(
      [
        {
          path:'',
          pathMatch:'full',
          component: LoginComponent
        }
,

      {
           path:'register',
           component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'show',
        component:ShowComponent
      },
      {
        path:'update/:id',
        component:UpdateComponent
      },
      {
        path:'categories',
        component:CategoriesComponent
      },
{
      path:'bookingdetails',
      component:BookingdetailsComponent
},
      ]
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
