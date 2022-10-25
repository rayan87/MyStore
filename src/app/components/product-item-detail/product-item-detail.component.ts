import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product : Product = { id: 0, name: '', description: '', price: 0, url: ''};

  constructor(private productService : ProductService,
    private route : ActivatedRoute,
    private navigator : Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.productService.getProductById(id)
      .subscribe(p => {
        if (p === undefined)
        {
          this.handleUndefinedProduct();
          return; 
        } 

        this.product = p;
      });
  }

  handleUndefinedProduct() {
    alert('Invalid product id');
    this.navigator.navigate(['/']);
  }

}
