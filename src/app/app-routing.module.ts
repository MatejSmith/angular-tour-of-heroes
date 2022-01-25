import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {ItemsToBuyComponent} from './items-to-buy/items-to-buy.component';
import { ItemsToBuyDetailComponent } from './items-to-buy-detail/items-to-buy-detail.component';
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'items_to_buy', component: ItemsToBuyComponent},
  { path: 'free/:id', component: ItemsToBuyDetailComponent},
  { path: 'items_to_buy/:id', component: ItemsToBuyDetailComponent},
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
