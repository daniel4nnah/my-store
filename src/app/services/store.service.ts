import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  total = 0;


  addProduct(product: Product){
    this.myShoppingCart.push(product);
  }

  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0)

  }

  getShoppingCart(){
    return this.myShoppingCart;
  }
  constructor() { }
}
