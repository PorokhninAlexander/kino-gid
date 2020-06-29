import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // @ViewChild

  title = 'kino-gid';
  // filmsArr = [];
  // numPage = '1';
  // pageCount = 1;
  // text = '';
  // imgUrl = 'https://image.tmdb.org/t/p/w500';
  // genresList = [];

  constructor(){}

  ngOnInit(): void {
    // this.getPopular(Number.parseInt(this.numPage));
    // this.getGenres();
  }

  // getPopular(numPage: number){
  //   this.db.getPopular(numPage).subscribe(response => {
  //     console.log(response);
  //     this.filmsArr = response.results;
  //     this.pageCount = response.total_pages;
  //     this.numPage = numPage.toString();
  //   })
  // }
  //
  // getGenres(){
  //   this.db.getGenresList().subscribe(response => {
  //     this.genresList = response.genres;
  //   })
  // }
  //
  // findByName(text){
  //   console.log(text);
  //   this.db.findByName(text).subscribe(response => {
  //     this.filmsArr = response.results;
  //     this.pageCount = response.total_pages;
  //     this.numPage = '1';
  //   })
  // }
  //
  // handlerPage(type: string) {
  //   this.numPage = type === 'prev' ? (Number.parseInt(this.numPage) - 1).toString() : (Number.parseInt(this.numPage) + 1).toString();
  //   this.getPopular(Number.parseInt(this.numPage))
  // }
  //
  // find(text: string) {
  //   if(text === ''){
  //     this.getPopular(1)
  //   } else {
  //     this.findByName(text)
  //   }
  // }
  //
  // getImage(path){
  //   if (path !== null) return this.imgUrl+path;
  //   return 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
  // }
  //
  // getGenreById(arr):any{
  //   return  this.genresList.filter(item => arr.indexOf(item.id) !== -1).map(item => item.name).join(', ');
  // }
  //
  // cansole(val){
  //   console.log(val)
  // }


}
