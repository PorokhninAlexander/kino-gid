import { Component, OnInit } from '@angular/core';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit {

  filmsArr = [];

  constructor(private db: DbService){
  }

  ngOnInit(): void {
    this.getFavorite();
  }

  getFavorite(): void{
    this.filmsArr = this.db.getAllFavorites();
  }

  getGenres(item: any): string{
    return item.map(elem => elem.name).join(', ');
  }

  getImage(size: string, path: string): string{
    return this.db.getImage(size, path);
  }

}
