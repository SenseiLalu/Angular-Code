import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

export interface Element{

        username: string,
        projectName: any
}


@Component({
  selector: 'app-get-assign-project',
  templateUrl: './get-assign-project.component.html',
  styleUrls: ['./get-assign-project.component.css']
})
export class GetAssignProjectComponent implements OnInit {
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  data:any[]=[];
  elements: Element[] = []; 


  displayedColumns = ['Project Name', 'User'];
  dataSource = new MatTableDataSource<any>;

  constructor(private userService:UserService ){}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data=>{
      console.log(data)
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      
      //this.Gettingthedata();
    });
}
}
