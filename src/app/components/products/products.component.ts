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

  products: Product[] = [];

  constructor(
    private StoreService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.StoreService.getShoppingCart();
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
}
