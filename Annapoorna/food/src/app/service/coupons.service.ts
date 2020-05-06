import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CouponsService {


  constructor(private http: HttpClient) { }
  deliverdooUri = "../../assets/all-coupons/deliverdoo.json"
  doordashUri = "../../assets/all-coupons/doordash.json"
  swiggyUri = "../../assets/all-coupons/swiggy.json"
  uberUri = "../../assets/all-coupons/uber.json"
  zomatoUri = "../../assets/all-coupons/zomato.json"


  getDeliverdooCoupons() {
    return this.http.get(this.deliverdooUri)
  }

  getDoordashCoupons() {
    return this.http.get(this.doordashUri)
  }

  getSwiggyCoupons() {
    return this.http.get(this.swiggyUri)
  }

  getUberCoupons() {
    return this.http.get(this.uberUri)
  }

  getZomatoCoupons() {
    return this.http.get(this.zomatoUri)
  }



}



