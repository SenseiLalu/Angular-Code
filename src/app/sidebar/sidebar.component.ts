import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  fullname:string="";
  email:string="";
  role:string="";


  constructor(private loginService: LoginService, private storeService : UserStoreService){}

  ngOnInit(): void{

  this.storeService.getFullnameFromStore().subscribe(val=>{
let fullnameFromToken = this.loginService.getFullnameFromToken();
this.fullname = val || fullnameFromToken
  
  })


this.storeService.getEmailFromStore().subscribe(res=>{
 let emailFromToken = this.loginService.getEmailFromToken();
 this.email = res || emailFromToken
   
   })
 

 this.storeService.getRoleFromStore().subscribe(data=>{
  let roleFromToken = this.loginService.getRoleFromToken();
  this.role = data || roleFromToken
    
    })
  }
}
