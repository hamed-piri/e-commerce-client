import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../../basket/basket.service";

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css']
})
export class OrderTotalsComponent implements OnInit{
  constructor(public basketService: BasketService){}
  ngOnInit(): void {
  }

}
