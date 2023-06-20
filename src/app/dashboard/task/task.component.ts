import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { TaskServiceService } from 'src/app/services/task-service.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

export interface Element {
  taskId: number,
  taskName: string,
  longDescription: string,
  assigenedDate: Date,
  deuDate: Date,
  assignedDto: number,
  createdOn: string,
  createdBy: string,
  statusId: number,
  taskCategoryId: string,
  projectId:string
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  data:any[]=[];
  elements: Element[] = []; 
  displayedColumns = ['Task Id', 'Title', 'Long Desc', 'Assigned Date','Due Date','Assigned To','Created On','Created By','Task Status','Task Category','Project'];
  dataSource = new MatTableDataSource<any>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private taskservice:TaskServiceService){
  }
  ngOnInit(): void {
    this.taskservice.getAllTask().subscribe(data=>{
      console.log(data)
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      //this.Gettingthedata();
    });
    // this.getData();

   
}

// getData(){
//   this.taskservice.getAllTask().subscribe(data=>{
//     console.log(data)
//     this.dataSource= new MatTableDataSource(data);
//     //this.Gettingthedata();
//   });
// }


}
