import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../model/product';

@Injectable()
export class ProductService {
  ServiceUrl: string = "http://localhost:3000/food/items";



  constructor(private http: HttpClient) { }
 
  getItems(): Observable<Item[]> {

    return this.http.get<Item[]>(this.ServiceUrl);

  }
}