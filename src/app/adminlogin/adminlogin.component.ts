import { Component, OnInit } from '@angular/core';
import { AdminService} from '../admin-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public username='';
  public password='';


  constructor(private admin:AdminService) { }

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
         alert('successfully login')
       }
     })
   }

}
