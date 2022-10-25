import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem : CartItem;
  @Output() cartItemQuantity : EventEmitter<number>;

  constructor() { 
    this.cartItem = {
      product: { id: 0, name: '', description: '', price: 0, url: ''},
      quantity: 0,
      subTotal: 0
    }

    this.cartItemQuantity = new EventEmitter();
  }

  ngOnInit(): void {
  }

  changeQuantity() {
    this.cartItemQuantity.emit(this.cartItem.quantity);
  }

}
