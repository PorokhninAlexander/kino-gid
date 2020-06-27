import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  getPopular(numPage): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=213b057032dd1e367ace65708714595f&language=en-US&page='+ numPage)
  }
}


