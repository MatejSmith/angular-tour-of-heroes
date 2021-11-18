import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ItemsComponent } from './items/items.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsToBuyComponent } from './items-to-buy/items-to-buy.component';
import { ItemsToBuyDetailComponent } from './items-to-buy-detail/items-to-buy-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ItemsComponent,
    HeroDetailComponent,
    ItemDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ItemsToBuyComponent,
    ItemsToBuyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
