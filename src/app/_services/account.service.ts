import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  //userdata=new BehaviorSubject('');
  constructor(private http:HttpClient) { }
  login(data:any){
    const url=`${environment.apiurl}/users/login`;
    return this.http.post<any>(url,JSON.stringify(data),
    {headers : {"Content-Type" : "application/json"}})
    .pipe(map(user=>{
      //console.log(user)
      if (user && user.token) {
        //this.userdata.next(user);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('authUser', JSON.stringify(user));
      }
      return user;
    }));
  }
  getUser(){
    const url=`${environment.apiurl}/users`;
    return this.http.get<any>(url);
  }
  updateUser(data:any){
    const url=`${environment.apiurl}/users/updateProfile`;
    return this.http.post<any>(url,data);
  }
}
