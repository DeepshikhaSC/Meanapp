import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public Username='';
 public Password='';
 public desc='';
 public image='';
 public id='';

  constructor(private route: ActivatedRoute,private router:Router,private admin:AdminService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.admin.fetchcat({id:this.id }).subscribe(data=>{
      if(data.status!='' && data.status!='error')
      {
        this.Username=data.status['Username'];
        this.Password=data.status['Password'];
        this.desc=data.status['desc'];
        this.image=data.status['image'];
        
  
      }
    });

  }
  
  
  public imagefile(event){
   if(event.target.files.length>0){
    const file =event.target.files[0];
    this.image = file;
  }
}
  updatep(){
    let id=this.route.snapshot.params.id;
    this.admin.updatep({id:this.id,Username:this.Username,Password:this.Password,image:this.image,desc:this.desc}).subscribe(data =>{
      if(data.status==1){
        alert('Data updated')
        
      }
      else
      {
        alert('Data not updated')
      }

    })
  }

}
