import { Injectable } from '@angular/core';
import { Isales } from '../data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url1:string="/assets/login.json"
  private url2:string="/assets/menu.json"
  private url3:string="/assets/product.json"

  constructor(private http:HttpClient) { }
  getdata():Observable<Isales[]>{
    return this.http.get<Isales[]>(this.url1);
  }
  getmenu():Observable<Isales[]>{
    return this.http.get<Isales[]>(this.url2);
  }
  getproduct():Observable<Isales[]>{
    return this.http.get<Isales[]>(this.url3);
  }
  
     getProduct(name: string) {
 
      return name;
    }
   

    
}
