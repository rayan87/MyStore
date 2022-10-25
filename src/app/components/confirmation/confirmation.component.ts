import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  lastOrder? : Order;

  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.lastOrder = this.orderService.getLastOrder();
  }

}
