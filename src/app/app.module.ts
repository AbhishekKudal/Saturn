import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ActionCardsComponent } from './components/action-cards/action-cards.component';
import { ContentCardsComponent } from './components/content-cards/content-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeaderComponent,
    ActionCardsComponent,
    ContentCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
