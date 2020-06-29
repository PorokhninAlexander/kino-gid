import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DbService} from "../../db.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  photo = '';
  film;
  filmsArr;
  genresList;
  showArr;
  page = 1;
  style = {
    transform: `translateX(${(this.page-1)*100}px)`
  };

  constructor(private route: ActivatedRoute,
              private db: DbService) { }

  ngOnInit(): void {
    this.getGenres();
    this.route.params.subscribe(Params => {
      this.db.getMovieBuId(Params.id).subscribe(response => this.film = response)
      this.getRecommended(Params.id)
    })
  }

  getImage(size, path){
    return this.db.getImage(size, path)
  }

  strFromArr(arr) {
    return arr.map(item => item.name).join(', ')
  }

  getRecommended(id){
    this.db.getRecommended(id).subscribe(response => {
      this.filmsArr = response.results;
      this.showArr = this.filmsArr.slice(0,5);

    })
  }

  getGenres(){
    this.db.getGenresList().subscribe(response => {
      this.genresList = response.genres;
    })
  }

  getGenreById(arr):any{
    return  this.genresList.filter(item => arr.indexOf(item.id) !== -1).map(item => item.name).join(', ');
  }

  newRecomended(page: any) {
    this.page = page;
    this.style = {
      transform: `translateX(${-(page-1)*771}px)`
    };
    this.showArr = this.filmsArr.slice((page-1)*5, page*5)
  }
}
