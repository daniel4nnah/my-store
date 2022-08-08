import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  showProductDetail = false;

  products: Product[] = [];

  today = new Date();
  date = new Date(2021, 1, 21);


  constructor(
    private StoreService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.StoreService.getShoppingCart();
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })
  }

  onAddToShoppingCart(product: Product){
    console.log(product);
    this.StoreService.addProduct(product);
    this.total = this.StoreService.getTotal();
  }

  onShowDetail(id: string){
    this.productsService.getProduct(id).
    subscribe(data => {
      console.log('product', data)
    })
  }
}
