import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username='';
  public password='';

  constructor( private router : Router ,private admin:AdminService) { }

  ngOnInit(): void {
  }
   public loginU()
   {
     this.admin.loginU({name:this.username,password:this.password}).subscribe(data=>{
       if(data.status=='error')
       {
         alert('login error')
       }
       else{
         localStorage.setItem('token',data.token);
         
         alert('successfully login')
         this.router.navigate(['show'])
       }
     })
   }
 
 
}
