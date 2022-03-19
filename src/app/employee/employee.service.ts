import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getEmployees(){
    return this.http
      .get(this.apiURL + '/employees')
      .pipe(retry(1), catchError(this.handleError));
  }

//   getEmployee(id: any) {
//     return this.http
//       .get(this.apiURL + '/employees/' + id)
//       .pipe(retry(1), catchError(this.handleError));
//   }
//   createEmployee(employee: any) {
//     return this.http
//       .post(
//         this.apiURL + '/employees',
//         JSON.stringify(employee),
//         this.httpOptions
//       )
//       .pipe(retry(1), catchError(this.handleError));
//   }
//   updateEmployee(id: any, employee: any){
//     return this.http
//       .put(
//         this.apiURL + '/employees/' + id,
//         JSON.stringify(employee),
//         this.httpOptions
//       )
//       .pipe(retry(1), catchError(this.handleError));
//   }

//   deleteEmployee(id: any) {
//     return this.http
//       .delete(this.apiURL + '/employees/' + id, this.httpOptions)
//       .pipe(retry(1), catchError(this.handleError));
//   }
//   // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}