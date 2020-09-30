import { Component, OnInit } from '@angular/core';
import { Contact } from "./Contact";
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  constructor() { }
  nm:string;
  ph:string;
  
  ctArr:Contact[]=[];
  ctList:Array<Contact>=[];

  searchVal:any = "";
  foundAt:number;
  foundContact:Contact;
  
  foundName:boolean = false;
  ctAre=this.ctArr.sort();

  ngOnInit(): void {
    
     this.ctArr.push(new Contact("hello",156655));
     this.ctArr.push(new Contact("world",156655));

  }
 
  addContact(){
    this.ctArr.push(new Contact(this.nm,this.ph));
  }

  deleteContact(name:string, phone:number) {
 
  //this.ctArr=this.ctArr.filter(item=>item!=new Contact(name,phone));
  this.ctArr=this.ctArr.filter(item=> item.name != name && item.phone != phone);
    }        

    searchContact(){
      var index=this.ctArr.findIndex(obj=>obj.name===this.searchVal);
      if(index>-1)
      {
           
           this.searchVal="Contact Found: "+this.ctArr[index].name+" "+this.ctArr[index].phone+"!"
      }   
      
    }
    find() {
      var index = this.ctArr.findIndex(obj => obj.name === this.searchVal);
      if (index > -1) {
        this.foundContact = this.ctArr[index];
        this.foundName = true;
      }
    }
}
  


