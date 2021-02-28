import { AppComponent } from './app.component';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UnsplashService {

  // variables
  readonly APIurl = 'https://api.unsplash.com./photos/';
  readonly myClientID = 'client_id=VXkHG_MWKtCwXuf1Bvl-m6Vh8bZ5QCo-SZ6XQzClgiA';
  readonly myCount = 'count=10';

  //, @Inject('photoID') private photoID: string
  constructor(private http: HttpClient
              // @Inject('photoID') private photoID: string
              ){
  }


  getImages<T>(): Observable<T> {
    return this.http.get<T>(this.APIurl + 'random?' + this.myClientID + '&' + this.myCount);
  }
  // i used the global variable to get the ID.
  // DO NOT USE THIS IN PROD!!!
  getThatOnePhoto<T>(): Observable<T> {
    return this.http.get<T>(this.APIurl + AppComponent.myGlobalVarForThatPhoto + '?' + this.myClientID);
  }
}
