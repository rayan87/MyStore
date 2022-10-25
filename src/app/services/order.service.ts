import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  orders : Order[] = [];

  constructor() { }

  placeOrder(customer: Customer, totalAmount: number): void {
    this.orders.push({
      customer: customer,
      totalAmount: totalAmount
    });
  }

  getLastOrder() : Order | undefined {
    if (this.orders.length == 0)
      return undefined;

    return this.orders[this.orders.length - 1];
  }
}
