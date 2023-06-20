import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private userService:UserService){}

   user ={
    username: '',
    password: '',
    email: '',
    isActive:'',
    role:''
  };

  ngOnInit(): void{

    
  }

  formSubmit(){
    console.log(this.user);
    this.userService.postData(this.user).subscribe(
      (response:any)=>{
        
   alert("Registered Successfully");
    
        
    window.location.href="/login"
    console.log(response);
      },
      error=>{
     
    console.log(error.error.message);
    
      }
    )
  }
}
