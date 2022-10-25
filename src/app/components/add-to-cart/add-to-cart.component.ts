import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  @Input() maxAddToCartQuantity : number = 10;
  quantityOptions : number[] = [];

  @Input() product : Product = { id: 0, name: '', description: '', price: 0, url: '' };
  selectedQuantity : number = 0;
  
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.populateQuantityOptions();
  }

  addToCart() : void {
    this.cartService.addToCart(this.product, this.selectedQuantity);
    alert('Added to cart!');
  }

  populateQuantityOptions() : void {
    for (let i = 1; i <= this.maxAddToCartQuantity; i++)
      this.quantityOptions.push(i);

    this.selectedQuantity = this.quantityOptions[0];
  }
}
