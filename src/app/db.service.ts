import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface  Genre{
  genres: [];
}

@Injectable({
  providedIn: 'root'
})

export class DbService {
  url = 'https://api.themoviedb.org/3/';
  key = '213b057032dd1e367ace65708714595f';
  imgUrl = 'https://image.tmdb.org/t/p/w';
  lang = 'ru-RU';

  constructor(private http: HttpClient) {
  }

  getPopular(numPage): Observable<any>{
    return this.http.get<any>
    (this.url + 'movie/popular?api_key=' + this.key + '&language=' + this.lang + '&page=' + numPage);
  }

  findByName(text: string): Observable<any>{
    return this.http.get(this.url + 'search/movie?api_key=' + this.key + '&language=' + this.lang + '&query=' +
      text + '&page=1&include_adult=false');
  }

  getGenresList(): Observable<Genre>{
    return this.http.get<Genre>(this.url + 'genre/movie/list?api_key=' + this.key + '&language=' + this.lang);
  }

  getMovieBuId(id: string): Observable<any>{
    return this.http.get(this.url + 'movie/' + id + '?api_key=' + this.key + '&language=' + this.lang);
  }

  getImage(size: string, path: string): string{
    if (path !== null) { return this.imgUrl + size + path; }
    return 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';
  }

  getRecommended(id: string): Observable<any>{
    return this.http.get(this.url + 'movie/' + id + '/recommendations?api_key=' +
      this.key + '&language=' + this.lang + '&page=1');
  }

  setFavorite(id: string, val: string): void{
    localStorage.setItem(id, val);
  }

  removeFavorite(id: string): void{
    localStorage.removeItem(id);
  }

  getAllFavorites(){
    const favArr = [];
    for (let i = 0; i < localStorage.length; i++){
      favArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return favArr;
  }

  isFavorite(id: string) {
    return localStorage.getItem(id) ? true : false;
  }
}


