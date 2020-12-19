import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UnsplashService {

  private unsplashapi =  environment.unsplashUrlApi;

  constructor(private http: HttpClient) { 

  }

  getImages<T>(): Observable<T> {
    return this.http.get<T>("https://api.unsplash.com./photos/random?client_id=VXkHG_MWKtCwXuf1Bvl-m6Vh8bZ5QCo-SZ6XQzClgiA&count=10");
  }
}
