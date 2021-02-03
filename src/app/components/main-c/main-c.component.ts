import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-main-c',
  templateUrl: './main-c.component.html',
  styleUrls: ['./main-c.component.css']
})
export class MainCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  add=false
  edit=false;
  error=false;
  
  num:number=0;
  addUser:string='';
  addTitle:string='';
  addStatus:string='';
  addDate:string='';
  editUser:string='';
  editTitle:string='';
  editStatus:string='';
  editDate:string='';
  editId:number=0;
  users=['Koka','Nika','Giorgi'];
  statusList=['not started','in progress','done'];
  toDoList=[
    {user:'Koka', 
    title:'dinner in Mtskheta',
    status:'not started',
    date: '2021-02-22',
    id:1
  },
    {user:'Nika', 
    title:'house work',
    status:'in progress',
    date: '2021-02-15',
    id:2
  },
    {user:'Giorgi', 
    title:'main project',
    status:'in progress',
    date: '2021-02-09',
    id:3
  },
    {user:'Koka', 
    title:'angular project',
    status:'done',
    date: '2021-02-03',
    id:4
  },
    {user:'Koka', 
    title:'bachelor project',
    status:'in progress',
    date: '2021-03-09',
    id:5
  },
  ];
  listEdit(){
      this.edit=true
      this.editUser=this.toDoList[this.editId].user;
      this.editTitle=this.toDoList[this.editId].title;
      this.editStatus=this.toDoList[this.editId].status;
      this.editDate=this.toDoList[this.editId].date;
    
  }
  saveAdd(){
    if(this.addUser==''||this.addStatus==''||this.addTitle==''||this.addDate==''){
      this.error=true
    }
    else{
    this.toDoList.splice(this.toDoList.length,0,{user:this.addUser, 
    title:this.addTitle,
    status:this.addStatus,
    date:this.addDate,
    id:this.toDoList.length+1})
    this.add=false
    this.addUser='';
    this.addTitle='';
    this.addStatus='';
    this.addDate='';
    this.error=false;
    
    }
  }
  editFinal(){
    if(this.editUser==''||this.editStatus==''||this.editTitle==''||this.editDate==''){
      this.error=true
    }
    else{
    this.toDoList.splice(this.editId,1,{user:this.editUser, 
    title:this.editTitle,
    status:this.editStatus,
    date:this.editDate,
    id:this.editId})
    this.edit=false
    this.editUser='';
    this.editTitle='';
    this.editStatus='';
    this.editDate='';
    this.editId=0;
    this.error=false;
    }
  }

}
