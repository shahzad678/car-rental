import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
constructor(private http:HttpClient) { }
//post api function.............
postapi(data:any){
return  this.http.post<any>('http://localhost:3000/product',data).pipe(map((res=>{
    return res
  })))
}
//getapifunction
getapi(){
  return this.http.get<any>("http://localhost:3000/product").pipe(map((res=>{
    return res
  })))
}
}
