import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProjectService {

  url="http://localhost:8082"

  constructor(private http:HttpClient) { }

postData(projectData:any){
 return this.http.post(`${this.url}/addProject`,projectData);
}
}
