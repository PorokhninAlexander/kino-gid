import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { FavorieComponent } from './pages/favorie/favorie.component';
import {DbService} from "./db.service";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import {NzAutocompleteModule, NzPaginationModule, NzToolTipModule} from "ng-zorro-antd";
import { PopularComponent } from './pages/popular/popular.component';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FavorieComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzToolTipModule,
    NzAutocompleteModule,
    NzPaginationModule
  ],
  providers: [DbService, { provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
