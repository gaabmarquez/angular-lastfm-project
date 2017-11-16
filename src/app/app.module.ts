import { APP_ROUTES } from './artist/artist.routing';
import { HttpClient } from '@angular/common/http';
import { ArtistService } from './artist/artist.service';
import { DetailArtistComponent } from './artist/detail-artist/detail-artist.component';
import { ListArtistComponent } from './artist/list-artist/list-artist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component'



@NgModule({
  declarations: [
    AppComponent,
    ListArtistComponent,
    DetailArtistComponent,
    HeaderComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,

  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
