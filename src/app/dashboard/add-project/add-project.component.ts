import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AddProjectService } from 'src/app/services/add-project.service';
import { __values } from 'tslib';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  projectData={
    projectName: '',
    active: true
  }


  constructor(private addProject:AddProjectService , private locate:Location){}

ngOnInit(): void{

}

onSubmit(){
  console.log("Project Added Successfully");

  console.log(this.projectData);

  this.addProject.postData(this.projectData).subscribe(
    response=>{
      //if data posted generated successfully
  console.log(response);
 
  // alert("Project Added Successfully!!");
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Project Added Successfully!!',
    showConfirmButton: false,
    timer: 1500
  })
  
  this.locate.back();
    },
    error=>{
      //if there is any error
  console.log(error.error);
  alert(error.error.message);
  
    }
  )
  
  
}

}
