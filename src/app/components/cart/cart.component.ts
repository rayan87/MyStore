import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : CartItem[] = [];
  totalAmount: number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.populateCartInfo();
  }
  
  changeQuantity(productId : number, quantity : number): void {
    this.cartService.setCartItemQuantity(productId, quantity);
    
    this.populateCartInfo();
  }

  deleteItem(productId : number) {
    this.cartService.deleteItem(productId);

    this.populateCartInfo();
  }

  populateCartInfo(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalAmount = this.cartService.getCartTotalAmount();
  }

}
