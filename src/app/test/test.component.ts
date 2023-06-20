import { DatePipe } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TaskServiceService } from "../services/task-service.service";


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  dialogDescData = '';
  descDialogVisible = false;
  dialog: any;
  desc: any;

  constructor(private service: TaskServiceService, private router: Router, private route: ActivatedRoute) {
}
  ngOnInit(): void {
    this.service.getAllTask().subscribe(
      res=>{
        console.log("submit success");
      }
    )
    throw new Error("Method not implemented.");
  }

  loadDialogData() {
    const child = document.createElement('div');
    child.innerHTML = this.dialogDescData;
    this.dialog.nativeElement.innerHTML = '';
    this.dialog.nativeElement.appendChild(child);
  }

  toggleDescDialog() {
    if (this.descDialogVisible) {
      this.descDialogVisible = false;
    } else {
    this.descDialogVisible = true;
    }
}
descHover(t: { description: string; }) {
  const child = document.createElement('div');
  this.dialogDescData = t.description;
  child.innerHTML = this.dialogDescData;
  this.desc.nativeElement.innerHTML = '';
  this.desc.nativeElement.appendChild(child);
}

appendChild(source: any, target: { appendChild: (arg0: any) => void; }) {
  target.appendChild(source);
}
}
