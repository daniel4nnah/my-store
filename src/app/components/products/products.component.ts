import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product } from 'src/models/product.model';

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

  limit = 10;
  offset = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(){
    this.productsService.getAllProducts(this.limit, this.offset)
    .subscribe(data => {
      if(this.offset != 0){
        this.products = this.products.concat(data);
      }
      else if (this.offset == 0){
        this.products = data;
      }
    })
    this.offset += this.limit;

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

  deleteProduct(){
    const id = this.productChosen.id;
    console.log("id", id);
    this.productsService.deleteProduct(id).subscribe(data =>{
      const productIndex = this.products.findIndex(item => item.id == this.productChosen.id)
      console.log(productIndex);
      this.products.splice(productIndex,1);
      this.showProductDetail = false;
    })
  }

}
