import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullname$ = new BehaviorSubject<string>("");
  private role$ = new BehaviorSubject<string>("");
  private email$ = new BehaviorSubject<string>("");
  constructor() { }

public getRoleFromStore(){
  return this.role$.asObservable();
}

public setRoleFromStore(role:string){
this.role$.next(role);
}


public getFullnameFromStore(){
  return this.fullname$.asObservable();
}

public setFullnameFromStore(fullname:string){
  this.fullname$.next(fullname);
  }

  public getEmailFromStore(){
    return this.email$.asObservable();
  }
  
  public setEmailFromStore(email:string){
    this.email$.next(email);
    }

}
