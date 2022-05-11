import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OrderComponent } from './components/order/order.component';
import { ShoppingPageComponent } from './components/shopping-page/shopping-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/landing'},
  {path: 'landing', component: LandingPageComponent},
  {path: 'shopping', component: ShoppingPageComponent},
  {path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
