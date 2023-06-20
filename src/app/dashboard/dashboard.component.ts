import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserStoreService } from '../services/user-store.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

export interface User{
  userId: number,
  username: string,
  email: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  user: User[]=[];
  updateuser:User={
    userId: 0,
    username: '',
    email: ''
  }

  users:any;
data:any
userId:any;
  // fullname:string="";
  //  email:string="";
 
 id:any;
   constructor(private loginService: LoginService, private storeService : UserStoreService,private userService:UserService,private route:ActivatedRoute){}
 
   ngOnInit(): void{

    
    this.users=this.loginService.getUserid();

    console.log(this.users);
    // this.id=this.route.snapshot.params.userId;
//    this.storeService.getFullnameFromStore().subscribe(val=>{
//  let fullnameFromToken = this.loginService.getFullnameFromToken();
//  this.fullname = val || fullnameFromToken
   
//    })
 

//    this.storeService.getEmailFromStore().subscribe(res=>{
//     let emailFromToken = this.loginService.getEmailFromToken();
//     this.email = res || emailFromToken
      
//       })

      this.getOneData();

      
  }

  getOneData(){
    const userid = localStorage.getItem("userId");
    this.updateuser.userId=userid?parseInt(userid):0
    this.userService.getOneUser(this.users).subscribe(res => {
      this.data = res
      this.user=this.data
      // console.log(this.data);
      
    });
   }

  updateUser(){
    this.updateuser.userId= this.data.userId;
    this.updateuser.username=this.data.username;
    this.updateuser.email=this.data.email;
    console.log(this.updateuser);
    
    this.userService.updateUser(this.updateuser,this.users).subscribe(res=>{
      console.log(res);
      // Swal.fire({
      //   position: 'center',
      //   icon: 'success',
      //   title: 'User Details Updated! Redirected To Login Page',
      //   showConfirmButton: true,
      //   // timer: 1500
      // })
    alert("User Details Updated! Redirected To Login Page");
    this.loginService.logout();
    window.location.href="/login"
  },
  (error) =>{
    console.log(error.error.message);
    alert(error.error.message);
  }
    );
  }
}
