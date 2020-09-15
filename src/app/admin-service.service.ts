import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService{

  constructor( private router:Router ,private http:HttpClient)
  { 

  }
 
    public registerU(data)
    {
    return this.http.post<any>(' http://localhost:3000/webapi/register',data);
    }

 public loginU(data)
 {
   console.log(data);
  return this.http.post<any>(' http://localhost:3000/webapi/login',data);

 }

 public show()
 {
  return this.http.get<any>(' http://localhost:3000/webapi/show');
 }

public showbook(){
  return this.http.get<any>('http://localhost:3000/webapi/bookingdetails');
}


 public logout()
 {
  return this.http.get<any>(' http://localhost:3000/webapi/logout');
 }
 
  public deleteproduct(data)
{
  return this.http.post<any>(' http://localhost:3000/webapi/delete-product',data);
}

public addcat(data){
  return this.http.post<any>('http://localhost:3000/webapi/addcat',data)
}
 public updatep(data)
 {
   return this.http.post<any>('http://localhost:3000/webapi/update-product',data);
 }
 

 public fetchcat(data){
   console.log(data);
  return this.http.post<any>('http://localhost:3000/webapi/onecategory',data);
}

    }

