import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  url="http://localhost:8082"
 
  constructor(private http:HttpClient) { }

  getCommentsForTask(taskId: number,info:any): Observable<Comment[]> {
    const url = `${this.url}/getAllComments/${taskId}`;
    return this.http.get<Comment[]>(url);
  }

  // addCommentToTask(taskId: number, content: string): Observable<Comment> {
  //   const url = `${this.apiUrl}/${taskId}/comments`;
  //   const comment: Comment = { taskId, content };
  //   return this.http.post<Comment>(url, comment);
  // }

  // getAllCommentsByTask(taskId:any){
  //   return this.http.get(`${this.url}/getAllComments/`+taskId);
  // }
}
