import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './dashboard/add-project/add-project.component';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProjectComponent } from './dashboard/edit-project/edit-project.component';
import { EditTaskComponent } from './dashboard/edit-task/edit-task.component';
import { ProjectComponent } from './dashboard/project/project.component';
import { TaskComponent } from './dashboard/task/task.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { AuthGuard } from './services/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestComponent } from './test/test.component';
import { VerifyOTPComponent } from './verify-otp/verify-otp.component';
import { AssigneTaskComponent } from './assigne-task/assigne-task.component';
import { GetAssignProjectComponent } from './get-assign-project/get-assign-project.component';

const routes: Routes = [
{
  path:'forget',
  component:ForgetPasswordComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'verify',
  component:VerifyOTPComponent,
  pathMatch:'full'
},
{
  path:'changepass',
  component:PasswordChangeComponent,
  pathMatch:'full'
},
{
  path:'signup',
  component:SignUpComponent,
  pathMatch:'full'
},
{
  path:'home', component:HomeComponent,
  canActivate:[AuthGuard],
  children:[
    {path: 'dashboard', component:DashboardComponent},
  {path:'task' , component:TaskComponent},
  {path: 'project', component:ProjectComponent},
  {path:'add-task', component:AddTaskComponent},
  {path:'edit-task/:taskId', component:EditTaskComponent},
  {path:'edit-project', component:EditProjectComponent},
  {path:'assigne-project',component:AssigneTaskComponent},
  {path:'add-project',component:AddProjectComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'assign-project',component:GetAssignProjectComponent}
]

},
{
  path:'test',
  component:TestComponent,
  pathMatch:'full' 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
