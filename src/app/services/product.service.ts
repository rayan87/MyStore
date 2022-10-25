import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data.json');
  }

  getProductById(id : number) :Observable<Product | undefined> {
    return this.getAllProducts()
      .pipe(map(products => products.find(p => p.id === id)));
  }
}
