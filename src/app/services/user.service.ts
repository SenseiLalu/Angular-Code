import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:8082"
  url2="http://localhost:8081"
 

  constructor(private http:HttpClient) { }


postData(user:any){

  return this.http.post(`${this.url}/addUser`,user);
}

getUser(){
  return this.http.get(`${this.url2}/user`);
}

updateUser(data:any,userId:any){
  return this.http.put(`${this.url}/updateUser/${userId}`,data);
}

getOneUser(userId:any):Observable<any>{
  return this.http.get(`${this.url}/user/`+userId);
}

getAllUser():Observable<Element[]>{
  return this.http.get<Element[]>(`${this.url}/projects-users`);
}

}
