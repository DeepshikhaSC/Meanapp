import { Component } from '@angular/core';
import { Router } from '@angular/router';
  
import {ViewChild} from '@angular/core'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


export class AppComponent {
  


   constructor(private router:Router) { }

  ngOnInit()  
  {  
     
    }  
  
  
  title = 'meanapp';
  public loggedIn(){
    return localStorage.getItem('token');
  }
  public logout(){
    localStorage.removeItem('token');
    alert('logout successfully');
    this.router.navigate(['login']);
  }

   
    }  
   
  
 


