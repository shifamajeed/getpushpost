import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Test1Service {

  constructor(private demo:HttpClient) { }
  

  Fntest(){
 return this.demo.get('https://cybersquare.herokuapp.com/user/')
  } 
  fnregister(data:any){
    return this.demo.post('https://cybersquare.herokuapp.com/user/',data) 
  
  }
 fndelete(remove:any){
  return this.demo.delete('https://cybersquare.herokuapp.com/user/'+remove)
 }

 updatedata(dat:any){
  return this.demo.put('https://cybersquare.herokuapp.com/user/',dat) 
 }

 fncoffee(){
   return this.demo.get('https://api.sampleapis.com/coffee/hot')
 }
fdelete(delet:any){
  return this.demo.delete('https://api.sampleapis.com/coffee/hot'+delet)

}
}
