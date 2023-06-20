import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AllProjectService } from 'src/app/services/all-project.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
export interface Project{
  projectId:number,
  projectName:string,
  active:true
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  @ViewChild(MatPaginator) paginator !: MatPaginator;



  displayedColumns = ['id', 'name', 'isActive'];
  dataSource = new MatTableDataSource<any>;


  constructor(private proService:AllProjectService){}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.proService.getData().subscribe(data=>{
      console.log(data);
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      //this.Gettingthedata();
    });
}

}


