import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  film;
  filmsArr;
  genresList;
  showArr;
  page = 1;
  style = {
    transform: `translateX(${(this.page - 1) * 100}px)`
  };
  id;
  favoriteText;

  constructor(private route: ActivatedRoute,
              private db: DbService) { }

  ngOnInit(): void {
    this.getGenres();
    this.route.params.subscribe(Params => {
      this.id = Params.id;
      this.db.getMovieById(Params.id).subscribe(response => this.film = response);
      this.getRecommended(Params.id);
    });
    this.favText();
  }

  getImage(size: string, path: string): string{
    return this.db.getImage(size, path);
  }

  strFromArr(arr): string{
    return arr.map(item => item.name).join(', ');
  }

  // Функция запроса рекомендаций по айди фильма
  getRecommended(id: string): void{
    this.db.getRecommended(id).subscribe(response => {
      this.filmsArr = response.results;
      this.showArr = this.filmsArr.slice(0, 5);
    });
  }

  getGenres(): void{
    this.db.getGenresList().subscribe(response => {
      this.genresList = response.genres;
    });
  }

  getGenreById(arr): any{
    return  this.genresList.filter(item => arr.indexOf(item.id) !== -1).map(item => item.name).join(', ');
  }

  // Функция отображает список рекомендаций по 5
  newRecommended(page: any) {
    this.page = page;
    this.style = {
      transform: `translateX(${ -(page - 1) * 771 }px)`
    };
    this.showArr = this.filmsArr.slice((page - 1) * 5, page * 5);
  }

  favText(): void{
    this.favoriteText = this.db.isFavorite(this.id.toString()) ? 'У вас в избранном' : 'Добавить в избранное';
  }

  // добавление или удаление фильма из избранного
  onFavorite(val): void{
    this.db.isFavorite(this.id.toString()) ? this.db.removeFavorite(this.id) : this.db.setFavorite(this.id, JSON.stringify(val));
    this.favText();
  }
}
