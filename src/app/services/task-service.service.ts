import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const contentTypeReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });
    return next.handle(contentTypeReq);
  }

  url="http://localhost:8082"

  constructor(private http:HttpClient) { }

  sendData(data:any){
    return this.http.post(`${this.url}/addTask`,data)
  }

  public getAllTask():Observable<Element[]>{
    return this.http.get<Element[]>(`${this.url}/getAllTaskData`)
  }

  sendComments(data:any){
    return this.http.post(`${this.url}/addComments`,data)
  }

  UpdateTask(taskId : number,data:any): Observable<any> {
    return this.http.put(`${this.url}/updateTask/${taskId}`,data);
   
  }
  getOneData(taskId:any) {
    return this.http.get(`${this.url}/getDetails/`+taskId);
  }

  
}
