import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //ProductId, Quantity
  cart : CartItem[] = [];

  constructor() {  }

  addToCart(product : Product,
    quantity : number) {
      let currentCartItem = this.cart.find(item => item.product.id == product.id);
      if (currentCartItem == undefined)
      {
        currentCartItem = { product: product, quantity: 0, subTotal: 0 };
        this.cart.push(currentCartItem);
      }
        
      currentCartItem.quantity += quantity;
      currentCartItem.subTotal = currentCartItem.quantity * product.price;
  }

  setCartItemQuantity(productId : number, quantity: number) {
    const cartItem = this.cart.find(item => item.product.id == productId);
    if (cartItem != undefined) {
      cartItem.quantity = quantity;
      cartItem.subTotal = cartItem.quantity * cartItem.product.price;
    }
  }

  getCartItems() : CartItem[] {
    return this.cart;
  }


}
