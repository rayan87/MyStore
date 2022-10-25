import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : CartItem[] = [];

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

  deleteItem(productId : number) : void {
    this.cart = this.cart.filter(item => item.product.id != productId);
  }

  setCartItemQuantity(productId : number, quantity: number) {
    const cartItem = this.cart.find(item => item.product.id == productId);
    if (cartItem != undefined) {
      cartItem.quantity = quantity;
      cartItem.subTotal = cartItem.quantity * cartItem.product.price;
    }
  }

  clearCart() : void {
    this.cart = [];
  }

  getCartItems() : CartItem[] {
    return this.cart;
  }

  getCartTotalAmount() : number {
    let totalAmount : number = 0;
    this.cart.map(item => totalAmount += item.subTotal);
    return totalAmount;
  }


}
