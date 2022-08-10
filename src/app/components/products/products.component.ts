import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product, UpdateProductDTO } from 'src/models/product.model';

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

  productChosen: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: '',
      name: ''
    }
  }

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    })
  }

  onAddToShoppingCart(product: Product){
    console.log(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string){
    this.productsService.getProduct(id)
    .subscribe(data => {
      console.log('product', data);
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }

  createNewProduct(){
    const product: CreateProductDTO = {
      title: 'Nuevo Producto',
      price: 500,
      images: ['../../assets/images/crystal.jpg'],
      description: 'Nuevo producto',
      categoryId: 2
    }
    this.productsService.createProduct(product).subscribe(data =>{
      this.products.unshift(data);
    })
  }

  updateProduct(){
    const changes = {
      title: 'TITULO DE PRUEBAAAA',
    }
    const id = this.productChosen.id;
    this.productsService.updateProduct(id, changes).subscribe(data =>{
      const productIndex = this.products.findIndex(item => item.id==this.productChosen.id)
      this.products[productIndex] = data;
    });
  }
}
