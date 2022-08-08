import { Injectable } from '@angular/core';
import { Product } from 'src/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  total = 0;


  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotal(){
    return this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0)

  }

  getShoppingCart(){
    return this.myShoppingCart;
  }
  constructor() { }
}
