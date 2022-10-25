import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : CartItem[] = [];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  changeQuantity(productId : number, quantity : number): void {
    this.cartService.setCartItemQuantity(productId, quantity);
  }

}
