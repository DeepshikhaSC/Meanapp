import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public date='';
  public persons='';
  public name='';
  public email='';
  public phone='';
  public city='';

  constructor(private router:Router,private admin:AdminService, private http:HttpClientModule){}
    

  ngOnInit(): void {
    

  }
  insertcat(){  
    this.admin.addcat({date:this.date,persons:this.persons,name:this.name,email:this.email,phone:this.phone,city:this.city}).subscribe(data =>{
    if(data.status=='1')
    {
    alert('Booking Done');
    this.date="";
    this.persons="";
    this.name="";
    this.email='';
    this.phone='';
    this.city='';
    }
    else{
      alert('Ops! something went wrong. ');
   }  
    })
}

}
