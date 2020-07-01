import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PopularComponent } from './pages/popular/popular.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';


const routes: Routes = [
  { path: '', component: PopularComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'favorite', component: FavoriteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
