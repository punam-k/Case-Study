import { AuthGuard } from './service/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './service/auth.service';
import { EventService } from './service/event.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { NewsComponent } from './news/news.component';
import { OrdersComponent } from './orders/orders.component';
import { CartService } from './service/cart.service';
import { HttpModule } from '@angular/http';
import { CouponsComponent } from './coupons/coupons.component';
import { CouponsService } from './service/coupons.service';
import { ProductService } from './service/product.service';
import { ProductsComponent } from './home/product/products/products.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    AboutComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    NewsComponent,
    OrdersComponent,
    CouponsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserAnimationsModule,// required animations module
    ToastrModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, EventService, CartService, CouponsService, ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
