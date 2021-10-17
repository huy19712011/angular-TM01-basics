import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import { Passenger } from './models/passenger.interface';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {
  
  constructor(private http: HttpClient) { 
    
  }
  
  getPassengers(): Observable<Passenger[]> {
    
    return this.http
      .get<Passenger[]>('http://localhost:3000/passengers')
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Passenger[]>('getPassengers', [])),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // alert(`${operation} failed: ${error.message}`);
      // alert(`${operation} failed: ${error.error}`);

      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}<br>Message: ${error.message}<br>Error: ${error.error}`;
        // errorMessage = `Error Code: ${error.status}<br>Error: ${error.error}`;
      }
      // this.toastr.error(errorMessage, 'Error', {timeOut: 3000});
      alert(errorMessage);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
