import { Component, OnInit } from '@angular/core';
import {DbService} from '../../db.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.sass']
})
export class PopularComponent implements OnInit {

  // Компонент отображает список популярных фильмов
  // Исользуется ng-zorro для пагинации

  filmsArr = [];
  numPage;
  pageCount = 1;
  text = '';
  genresList = [];

  constructor(private db: DbService,
              private route: ActivatedRoute,
              private router: Router){
  }

  ngOnInit(): void {
    this.getNumPage();
    this.getGenres();
  }

  // Забирает номер страницы из параметров
  getNumPage(): void{
    this.route.queryParams.subscribe(Params => {
      this.numPage =  Params.hasOwnProperty('page') ? Params.page : 1;
      this.getPopular(this.numPage);
    });
  }

  getPopular(numPage: number): void{
    this.db.getPopular(numPage).subscribe(response => {
      this.router.navigate([''], {queryParams: { page : numPage} });
      this.filmsArr = response.results;
      this.pageCount = response.total_pages;
    });
  }

  // Запрашивает список всех жанров
  getGenres(): void{
    this.db.getGenresList().subscribe(response => {
      this.genresList = response.genres;
    });
  }

  findByName(text: string): void{
    this.db.findByName(text).subscribe(response => {
      this.filmsArr = response.results;
      this.pageCount = response.total_pages;
      this.numPage = '1';
    });
  }

  find(text: string): void{
    if (text === ''){
      this.getPopular(1);
    } else {
      this.findByName(text);
    }
  }

  getImage(size: string, path: string): string{
    return this.db.getImage(size, path);
  }

  // Принимает массив айди жанров и отдаёт строку через запятую
  getGenreById(arr): any{
    return  this.genresList.filter(item => arr.indexOf(item.id) !== -1).map(item => item.name).join(', ');
  }

}
