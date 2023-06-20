import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullname:string="";
  role:string="";
  constructor(private loginService: LoginService ,private storeService:UserStoreService){}

public loggedIn=false;
  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
  this.loginService.getUserid();
  console.log( this.loginService.getUserid());

  this.storeService.getFullnameFromStore().subscribe(val=>{
    let fullnameFromToken = this.loginService.getFullnameFromToken();
    this.fullname = val || fullnameFromToken
      
      })

      this.storeService.getRoleFromStore().subscribe(data=>{
        let roleFromToken = this.loginService.getRoleFromToken();
        this.role = data || roleFromToken
          
          })
  
  }


loggedoutUser(){
    this.loginService.logout()
    location.reload()
  }
}
