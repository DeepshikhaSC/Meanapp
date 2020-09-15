import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-service.service';
import  { Router }  from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 public Username='';
 public Password='';
 public Cpassword='';
 public image='';

  constructor( private router:Router ,private admin:AdminService) { }
    
  ngOnInit(): void {
  }
  public imagefile(event)
  {
  if(event.target.files.length>0){
    const file =event.target.files[0];
    this.image = file;
  }
  }
    public registerU()
    {
      if(this.Cpassword==this.Password)
      {
        const formdata=new FormData();
        formdata.append('name',this.Username);
        formdata.append('password',this.Password);
        formdata.append('image',this.image);
        this.admin.registerU(formdata).subscribe((data)=>{
        if (data.status=='error')
        {
        alert('error in creating user');
        }
        else{
          alert('user created');
          this.router.navigate(['login'])
          
        
        }
      })
    }
    }
  }


