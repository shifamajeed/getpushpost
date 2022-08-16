import { Component, OnInit } from '@angular/core';
import{register} from './registerdata.model'
import { Test1Service } from '../test1.service';


@Component({
  selector: 'app-registeruserdata',
  templateUrl: './registeruserdata.component.html',
  styleUrls: ['./registeruserdata.component.css']
})
export class RegisteruserdataComponent implements OnInit {

  constructor(private testdatas:Test1Service) { }

  ngOnInit(): void {
  }
  
  result:any
  objectname=new register();
fndata(){
this.testdatas. fnregister(this.objectname).subscribe(res=>{
  this.result=res

  
})};

fncreat(){
  
}

}

