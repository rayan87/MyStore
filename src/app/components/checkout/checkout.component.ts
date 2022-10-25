import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  customer : Customer;

  constructor(private orderService : OrderService,
      private cartService : CartService,
      private route : Router) { 
    this.customer = {
      fullName: '',
      creditCard: '',
      address: ''
    };
  }

  ngOnInit(): void {

  }

  checkout(): void {
    const totalAmount = this.cartService.getCartTotalAmount();
    this.orderService.placeOrder(this.customer, totalAmount);

    this.cartService.clearCart();

    this.route.navigate(['/confirmation']);
  }
}
