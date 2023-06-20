import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TaskServiceService } from 'src/app/services/task-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

[x:string]:any;
elements:any[]=[];
elements1:any[]=[];
elements2:any[]=[];
projects:any[]=[];
data={
  taskName:"",
  longDescription:"",
   assigenedDate:"2022-02-03",
    deuDate:"2023-03-04",
    statusId:"",
    assignedDto:"",
    createdby:1,
    taskCategoryId:"",
    createdOn:"2023-12-21",
    projectId:""
    // comments:"",
    // users:""
}

user:any;


  constructor(private http:HttpClient, private service: TaskServiceService, private locate:Location,private loginService:LoginService) { }
  ngOnInit(): void {
    this.loadUser();
    this.loadStatus();
    this.loadCategory();
    this.loadProjects();
    this.user=this.loginService.getUserid();
    console.log(this.user);
  }

  loadUser():void{
    this.http.get<any>('http://localhost:8082/getAllUser').subscribe((result:any[])=>{
      this.elements=result;
      console.log(result);
      
    });

   
  }

  loadStatus():void{
    this.http.get<any>('http://localhost:8082/getAllStatus').subscribe((result:any[])=>{
      this.elements1=result;
      console.log(result);
      
    });
  }

  loadCategory(){
    this.http.get<any>('http://localhost:8082/getAllCategory').subscribe((result:any[])=>{
      this.elements2=result;
      console.log(result);
      
    });
  }

  loadProjects(){
    this.http.get<any>('http://localhost:8082/getAllProject').subscribe((result:any[])=>{
      this.projects=result;
      console.log(result);
      
    });
  }


  submitTheForm(){
    this.data.createdby=this.user;
    console.log("submitting the form");
    console.log(this.data);
    this.service.sendData(this.data).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Task Added Successfully!!',
          showConfirmButton: false,
          timer: 1500
        })
        // alert("Task Added Successfully!!");
        
        this.locate.back();
      },
      error=>{
        console.log(error.error.message);
        alert(error.error.message);
      }
    )
    
  }

  
    
  }

