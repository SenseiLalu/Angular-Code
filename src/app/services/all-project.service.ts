import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllProjectService {


  url="http://localhost:8082"

  constructor(private http:HttpClient) { }

getData(): Observable<any>{
 return this.http.get<any[]>(`${this.url}/getAllProject`);
}

assignProjectToUser(projectId:number,userId:number){
  return this.http.put(`${this.url}/projects/${projectId}/users/${userId}`,{})
}
}
