import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../basket/basket.service";
import {BasketItem} from "../../shared/models/basket";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  constructor(public basketService: BasketService) {
  }
  ngOnInit(): void {
  }

  getCount(items: BasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

}
