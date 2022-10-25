import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input('cartItem') cartItem? : CartItem;
  @Output() quantityChanged : EventEmitter<number>;
  @Output() itemDeleted : EventEmitter<void>;

  constructor() { 
    this.quantityChanged = new EventEmitter();
    this.itemDeleted = new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  changeQuantity() {
    this.quantityChanged.emit(this.cartItem?.quantity);
  }

  deleteItem() {
    this.itemDeleted.emit();
  }

}
