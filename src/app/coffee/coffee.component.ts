import { Component, OnInit } from '@angular/core';
import { Test1Service } from '../test1.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor(private beans:Test1Service) { }

  ngOnInit(): void {
    this.fncoffeeshop()
  }
  cofee:any
fncoffeeshop(){
  this.beans.fncoffee().subscribe(res=>{
    this.cofee=res
    console.log(res)
  })
  }
  
  fndelete(delet:any){
    console.log(delet)
  this.beans.fdelete(delet).subscribe(res=>{
    this.cofee=res
  })
}
}
