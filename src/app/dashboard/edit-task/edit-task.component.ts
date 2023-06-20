import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentServiceService } from 'src/app/services/comment-service.service';
import { LoginService } from 'src/app/services/login.service';
import { TaskServiceService } from 'src/app/services/task-service.service';
import Swal from 'sweetalert2'
export interface Element {
  taskId: string,
  taskName:string,
  longDescription:string,
   assigenedDate:Date,
    deuDate:Date,
    statusId:number,
    assignedDto:number,
    createdby:string,
    taskCategoryId:string,
    createdOn:Date
}
export interface Comments{
  comment:string,
  commentDateAndTime:Date,
  taskId:number,
  userId:number
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  [x:string]:any;
  element: Element[] = [];
  updatetaskdetail:Element={
    taskName: "",
    longDescription: "",
    assigenedDate:new Date("0001-01-01"),
    deuDate: new Date("0001-01-01") ,
    createdOn: new Date("0001-01-01"),
    taskCategoryId:"",
    statusId:0,
    assignedDto:0,
    createdby:"3",
    taskId:""
    
};
elements:any[]=[];
elements1:any[]=[];
elements2:any[]=[];
  comments: any[] = [];
  commentText: '' = "";
  Id:any;
data:any;


commentResources:any[]= [];

info:any;

user:any;

Onecomment:any;


comment:Comments[]=[];
postComments:Comments={
  comment:"",
  commentDateAndTime:new Date("0001-01-01"),
  taskId:2,
  userId:1
}

constructor(private http:HttpClient, private service: TaskServiceService, private route:ActivatedRoute, private locate:Location, private commentService:CommentServiceService,private loginService:LoginService ) {}
  ngOnInit(): void {
    this.Id=this.route.snapshot.params.taskId;
    this.loadUser();
    this.loadStatus();
     this.loadComments();
    this.getOneData();
  //  this.getCommentsbyTask();
    this.getCommentsForTask();
    this.addComment();

    this.user=this.loginService.getUserid();
    console.log(this.user);
    
  }

  getOneData(){
    this.service.getOneData(this.Id).subscribe(res => {
      this.data = res
      this.element = this.data
      console.log(this.data);
      
    });
   }

   getCommentsForTask(){
    this.commentService.getCommentsForTask(this.Id,this.info).subscribe(res=>{
      this.commentResources = res;
      // this.elements2= this.commentResources;
      console.log(this.commentResources);
    })
   }

  //  getCommentsbyTask() {
  //   this.commentService.getAllCommentsByTask(this.data.taskId).subscribe(
  //     (response:any) => {
  //       this.comments = response.commentResources
  //       console.log(response.commentResources);     
  //     },
  //     (error: any) => {
  //       console.error('Error Fetching Comments:', error);
        
  //     }
  //   );
  // }


  loadComments():void{
    this.http.get<any>('http://localhost:8082/allComments').subscribe((result:any[]) => {
      this.comments = result;
      console.log(result);
      
    });
  }



  addComment() {
    // Send new comment to backend API
    this.http.post('http://localhost:8082/addComments',this.info).subscribe((comment: any) => {
      this.commentText = ''; // Clear text input
    });
  }

  loadUser():void{
    this.http.get<any>('http://localhost:8082/getAllUser').subscribe((result:any[])=>{
      this.elements=result;
      console.log(result);
      
    });

   
  }

  loadStatus():void{
    this.http.get<any>('http://localhost:8082/getAllStatus').subscribe((result:any[])=>{
      this.elements1=result;
      console.log(result);
      
    });
  }

  updateData(){
    this.updatetaskdetail.taskId=this.data.taskId;
    this.updatetaskdetail.taskName=this.data.taskName;
    this.updatetaskdetail.longDescription=this.data.longDescription;
    this.updatetaskdetail.assigenedDate=this.data.assigenedDate;
    this.updatetaskdetail.deuDate=this.data.deuDate;
    this.updatetaskdetail.assignedDto= this.data.assignedDto.userId;
    this.updatetaskdetail.statusId=this.data.statusId.statusId;
    console.log(this.data);
this.service.UpdateTask(this.Id=this.route.snapshot.params.taskId,this.updatetaskdetail ).subscribe(
  (resp) =>{
    // const value = resp.taskId;
    console.log(resp);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Data Updated Successfully!!',
      showConfirmButton: false,
      timer: 1500
    })
    // alert("Data Updated Successfully!!");
    this.locate.back();
    this.getOneData();
  },
  (error) =>{
    console.log(error.error.message);
    alert(error.error.message);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!,try again',
    })
  }
);
  }


  submitTheForm(){
    this.postComments.taskId = this.data.taskId;
    this.postComments.userId=this.user;
    console.log("submitting the form");
    console.log(this.postComments);
    this.service.sendComments(this.postComments).subscribe(
      response=>{
        console.log(response);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Comment Added Successfully!!',
          showConfirmButton: false,
          timer: 1500
        })
        // alert("Comment Added Successfully!!");
        window.location.reload();
        
// this.commentService.getCommentsForTask(this.Id=this.route.snapshot.params.taskId,this.info);


      },
      error=>{
        console.log(error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong , try again!',
        })
        // alert(error.error.message);
      },
      
    )
    }
  }
