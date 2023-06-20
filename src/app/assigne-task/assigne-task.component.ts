import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllProjectService } from '../services/all-project.service';
import Swal from 'sweetalert2'
import { Location } from '@angular/common';
@Component({
  selector: 'app-assigne-task',
  templateUrl: './assigne-task.component.html',
  styleUrls: ['./assigne-task.component.css']
})
export class AssigneTaskComponent implements OnInit {

  elements: any[] = [];
  projects:any[]=[];


  data={
    assignedto:"",
    pprojectId:""
  }

  selectedProjectId: 123 = 123;
  selectedUserId: 23 = 23;    

  constructor(private http:HttpClient , private projectService : AllProjectService,private locate:Location){}

  ngOnInit():void{
  this.loadUser();
  this.loadproject();
  }

  loadproject():void{
    this.http.get<any>('http://localhost:8082/getAllProject').subscribe((result: any[])=>{
      this.projects = result;
      console.log(result);
    });
  
  }

  loadUser():void{
    this.http.get<any>('http://localhost:8082/getAllUser').subscribe((result:any[])=>{
      this.elements=result;
      console.log(result);
      
    });
  
  }

  assignProject() {
    this.projectService.assignProjectToUser(this.selectedProjectId, this.selectedUserId).subscribe(
      (response) => {
        console.log('Project assigned successfully!');
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Project Assigned Successfully!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.locate.back();
        // alert("Project Assigned Successfully!!");
      },
      (error) => {
        console.error('Failed to assign project:', error);
        alert(error.error.message);
      }
    );
  }

}
