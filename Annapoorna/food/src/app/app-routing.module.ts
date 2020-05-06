import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './service/auth.guard';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ProductsComponent } from './home/product/products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
        children: [
          {

            path: 'products',
            component: ProductsComponent,

          }
        ]
      }
    ]
  },



  { path: 'item', component: ProductComponent },
  { path: 'order', component: ProductComponent },
  {
    path: 'coupons',
    canActivate: [AuthGuard], component: CouponsComponent
  },
  { path: 'cart', component: CartComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
