import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';
import { CartService } from '../../../service/cart.service';
import { Item } from '../../../model/product';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  item: Item[];


  constructor(private itemService: ProductService, private router: Router, private cartservice: CartService,
    private toastrservice: ToastrService
  ) {



  }

  getItemsFromService() {
    this.itemService.getItems().subscribe((response) => {
      this.item = response;
      console.log(this.item);
    })
  }
  ngOnInit(): void {
    this.getItemsFromService();
  }
  addcart(selecteditem) {

    this.cartservice.addToCart(selecteditem).subscribe((response) => {
      console.log("value:", response);
      this.router.navigate(['/cart']);
      this.showSuccess()
    })
  }
  showSuccess() {
    this.toastrservice.success('successfully item added to cart');
  }

}
