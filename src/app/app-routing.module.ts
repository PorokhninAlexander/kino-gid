import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {AboutComponent} from "./pages/about/about.component";
import {PopularComponent} from "./pages/popular/popular.component";


const routes: Routes = [
  {path: '', component:PopularComponent},
  {path: 'about/:id', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
