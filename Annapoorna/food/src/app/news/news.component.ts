import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Object[];

  constructor() {
    this.news = [
      {
        "image": "../../assets/images/corono.jpg",
        "head": "Dineout launches vouchers to offer financial support to Indian restaurants amidst Covid-19 crisis",
        "news": "These vouchers available in Rs 1,000 denominations would help support restaurants, as Dineout will transfer the funds to the restaurants at no additional charges to ensure that they continue to receive the crucial cash-flow needed to survive these trying times, while food-lovers get discounted coupons from their favourite eateries in town.",
        "details": "https://economictimes.indiatimes.com/industry/services/hotels-/-restaurants/dineout-launches-vouchers-to-offer-financial-support-to-indian-restaurants-amidst-covid-19-crisis/articleshow/74812024.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
      },
      {
        "image": "../../assets/images/food-news.jpg",
        "head": "Food deliveries hit as apps grapple with restrictions in Pune",
        "news": "PUNE: Home deliveries of essential items have started to falter despite a government notification that permits delivery of food and other items.The lockdown has left restaurants, groceries and other stores short on manpower. Many shops have limited working hours to slots from 7am to 11am and 4pm to 9pm. About 85% of restaurants across the city have stopped home deliveries altogether.",
        "details": "https://timesofindia.indiatimes.com/city/pune/food-deliveries-hit-as-apps-grapple-with-restrictions/articleshow/74819123.cms"
      }
    ]
  }


  ngOnInit(): void {
  }

}
