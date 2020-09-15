import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin-service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
    public products ='';
  constructor( private router : Router,private admin:AdminService) { }

  ngOnInit(): void {
  this.admin.show().subscribe(data =>{
    if(data.status != 'error' && data.status !='0'){
      this.products=data.status;
      console.log(this.products);
    }
    else{
      alert('No data found');
      this.router.navigate(['/register']);
    }
  })
  
  }
 
    
  

  }
