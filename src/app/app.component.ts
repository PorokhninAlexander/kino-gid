import {Component, OnInit} from '@angular/core';
import {DbService} from "./db.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kino-gid';
  filmsArr = [];
  numPage = 1;

  imgUrl = 'https://image.tmdb.org/t/p/w500'

  constructor(private db: DbService){}

  ngOnInit(): void {
    this.getPopular(this.numPage)
  }

  getPopular(numPage: number){
    this.db.getPopular(numPage).subscribe(response => {
      console.log(response);
      this.filmsArr = response.results
    })
  }


  handlerPage(type: string) {
    this.numPage = type === 'prev' ? this.numPage - 1 : this.numPage + 1;
    this.getPopular(this.numPage)
  }
}
