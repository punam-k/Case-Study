import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { Item } from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  item: Item[];

  constructor(private itemService: ProductService, private router: Router, ) { }

  ngOnInit(): void {
  }

}

