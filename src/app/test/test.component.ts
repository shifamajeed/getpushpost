
import { Component, OnInit } from '@angular/core';
import {Test1Service} from '../test1.service'
import { register } from '../registeruserdata/registerdata.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testdatas:Test1Service) { }

  ngOnInit(): void {
  this.fngetdata()
  }
  result:any
  fngetdata(){
  this.testdatas.Fntest().subscribe(res=>{
    this.result=res
  })
}
fndel(remove:any){
  console.log(remove)
  this.testdatas.fndelete(remove).subscribe(res=>{
    this.result=res



  }
  )}
  // update
  radiostatus:any;
  radiomale=false
  radiofemale=false
  objectname=new register();

  openDialog(dat:any){
  
this.objectname.id=dat.id;
this.objectname.f_name=dat.f_name;
this.objectname.l_name=dat.l_name;
this.objectname.dob=dat.dob;
this.radiostatus=dat.gender;
 
if(this.radiostatus=='male'){
  this.radiomale=true;
  this.radiofemale=false;
}
else if(this.radiostatus=='female'){
  this.radiomale=false;
  this.radiofemale=true;
}
 

this.objectname.email=dat.email;





  }
  fndata(){
    this.testdatas.updatedata(this.objectname).subscribe(res=>{
      this.result=res
      console.log(res)
    })
  }
  
  }


