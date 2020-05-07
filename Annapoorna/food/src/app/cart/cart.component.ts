import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item: any;
  resultPrice: any;
  constructor(
    private cartservice: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrservice: ToastrService
  ) { }

  ngOnInit(): void {
    this.getItemsFromService();
  }
  getItemsFromService() {
    this.cartservice.getToCart().subscribe((response) => {
      this.item = response;
      console.log(this.item)
      this.item.forEach(item => {
        item.ordervalue = 1
        if(item.ordervalue == 0){  this.deleteFromCart(item)}
      })

    })
  }
  deleteFromCart(i) {

    this.cartservice.deleteFromCart(i).subscribe((response) => {
      this.getItemsFromService();
      this.showSuccess()
    })

  }
  order() {
    this.toastrservice.success('successfully Order placed');
    this.item.forEach(item => {
      item.ordervalue = 0
      if(item.ordervalue == 0){  this.deleteFromCart(item)}
    

    })
  }
  showSuccess() {
    this.toastrservice.success('successfully item deleted from cart');
  }
  getCoupon(coupon) {
    console.log("coupon", coupon);
    console.log("coupon-price", coupon.price);
    this.item.forEach(item => {
      console.log(item.price)
     this.resultPrice = item.price - 10;
      console.log(item.price);
    })
    coupon.price=   this.resultPrice;
    console.log(coupon.price);
   
    return coupon.price;
  }

  Increment(cond, item) {
    if (cond === 'up') {
      item.ordervalue++
    }
    else if (cond === 'down') {
      if (item.ordervalue > 0) {
        item.ordervalue--;

      }
      if(item.ordervalue == 0)
      {  this.deleteFromCart(item)}
    }
  }
}
