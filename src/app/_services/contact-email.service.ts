import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  constructor(private http:HttpClient) { }
  
  sendEmail(data:any){
    const url=`${environment.apiurl}common/send-contact-mail`;
    return this.http.post<any>(url,JSON.stringify(data));
  }
}
