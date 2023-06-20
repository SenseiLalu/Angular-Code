import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8081"
 private userPayload:any;
  // private currentUser: any;

  constructor(private http:HttpClient) { 
    this.userPayload= this.decodedToken();
  }


 

generateToken(credentials:any){
 // token generate

 return this.http.post(`${this.url}/token`,credentials);
}


  //for login user

  logingUser(token :any, userId:any){
    localStorage.setItem("token",token);
    localStorage.setItem("userId",userId);
    return true;
  }



  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getUserid(){
    return localStorage.getItem("userId")    
  }

  logout(){
    localStorage.removeItem('token');
      return true;
    }
  
decodedToken(){
  const jwtHelper = new JwtHelperService();
  const token =this.getToken()!;
  console.log(jwtHelper.decodeToken(token));
  
  return jwtHelper.decodeToken(token);
}
  

getFullnameFromToken(){
  if(this.userPayload){
return this.userPayload.sub;
  }
}

getEmailFromToken(){
if(this.userPayload){
  return this.userPayload.email;
}
}

getRoleFromToken(){
  if(this.userPayload){
    return this.userPayload.role;
  }
  }

}
