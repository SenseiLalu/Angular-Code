import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  credentials={
    username:'',
    password:''
  }

constructor(private loginService:LoginService){}

ngOnInit(): void{

}

  onSubmit(){
  //  console.log("Form is Submitting");
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){
      console.log("we have to submit the form");

     // token generate
this.loginService.generateToken(this.credentials).subscribe(
  (response:any)=>{
    //if token generated successfully
console.log(response.token);

    this.loginService.logingUser(response.token,response.userId);
    // this.loginService.setUser(response.user);
    // console.log(response.userId);
    
    
window.location.href="/home"
  },
  error=>{
    //if there is any error
console.log(error);

  }
)

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      console.log("Fields are empty");

    }
  }
}
