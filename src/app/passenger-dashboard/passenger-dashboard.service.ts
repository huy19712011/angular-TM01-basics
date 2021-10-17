import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import { Passenger } from './models/passenger.interface';

const URL_API: string = 'http://localhost:3000/passengers';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {
  
  constructor(private http: HttpClient) { 
    
  }
  
  getPassengers(): Observable<Passenger[]> {
    
    return this.http
      .get<Passenger[]>(URL_API)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Passenger[]>('getPassengers', [])),
      );
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let options = {
      headers: headers,
    };

    return this.http.put<Passenger>(`${URL_API}/${passenger.id}`, passenger, options)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError<Passenger>('updatePassenger', passenger)),
      );

    // return this.http.patch<Passenger>(`${URL_API}/${passenger.id}`, JSON.stringify({fullname: passenger.fullname}), options)
    //   .pipe(
    //     tap(data => console.log(data)),
    //     catchError(this.handleError<Passenger>('updatePassenger', passenger)),
    //   );

  }

  deletePassenger(passenger: Passenger): Observable<Passenger> {
    
    return this.http.delete<Passenger>(`${URL_API}/${passenger.id}`)
      .pipe(
        tap(data => console.log("Deleted: ", data)),
        catchError(this.handleError<Passenger>('removePassenger')),
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
