import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyOTPComponent } from './verify-otp/verify-otp.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './dashboard/task/task.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';
import { EditTaskComponent } from './dashboard/edit-task/edit-task.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { EditProjectComponent } from './dashboard/edit-project/edit-project.component';
import { AddProjectComponent } from './dashboard/add-project/add-project.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestComponent } from './test/test.component';
import { AssigneTaskComponent } from './assigne-task/assigne-task.component';
import { GetAssignProjectComponent } from './get-assign-project/get-assign-project.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    VerifyOTPComponent,
    PasswordChangeComponent,
    SignUpComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    TaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    ProjectComponent,
    EditProjectComponent,
    AddProjectComponent,
    ChangePasswordComponent,
    TestComponent,
    AssigneTaskComponent,
    GetAssignProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatPaginatorModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
