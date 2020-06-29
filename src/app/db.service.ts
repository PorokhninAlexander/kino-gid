import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface  Genre{
  genres: []
}

@Injectable({
  providedIn: 'root'
})

export class DbService {

  imgUrl = 'https://image.tmdb.org/t/p/w';

  constructor(private http: HttpClient) {
  }

  getPopular(numPage): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=213b057032dd1e367ace65708714595f&language=ru-RU&page='+ numPage)
  }

  findByName(text: string): Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=213b057032dd1e367ace65708714595f&language=ru-RU&query='+text+'&page=1&include_adult=false')
  }

  getGenresList(): Observable<Genre>{
    return this.http.get<Genre>('https://api.themoviedb.org/3/genre/movie/list?api_key=213b057032dd1e367ace65708714595f&language=ru-RU')
  }

  getMovieBuId(id): Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=213b057032dd1e367ace65708714595f&language=ru-RU')
  }

  getImage(size, path){
    if (path !== null) return this.imgUrl+size+path;
    return 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
  }

  getRecommended(id):Observable<any>{
    return this.http.get('https://api.themoviedb.org/3/movie/'+ id +'/recommendations?api_key=213b057032dd1e367ace65708714595f&language=ru-RU&page=1')
  }

}


