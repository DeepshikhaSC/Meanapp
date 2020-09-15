import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin-service.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
  public products='';

  constructor(private router:Router,private admin:AdminService) { }

  ngOnInit(): void {
    this.admin.showbook().subscribe(data =>{
      if(data.status != 'error' && data.status !='0'){
        this.products=data.status;
        console.log(this.products);
      }
      else{
        alert('No data found');
        this.router.navigate(['/categories']);
      }
    })
    
    }
    deleteproduct(id){
      this.admin.deleteproduct({id:id}).subscribe(data=>{
        if(data.status=='1')
        {
          alert('Product Deleted');
        }
        else{
          alert('Product NOT Deleted');
  
        }
      });
    }

}
