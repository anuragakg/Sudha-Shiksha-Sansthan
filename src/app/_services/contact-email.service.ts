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
    console.log(`${environment.apiurl}common/send-contact-mail`)
    const url=`${environment.apiurl}common/send-contact-mail`;
    // return this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe((response)=>{
    //   console.log(response)
    // });
    return this.http.post<any>(url,JSON.stringify(data)).subscribe((response)=>{
        console.log(response)
      });
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
