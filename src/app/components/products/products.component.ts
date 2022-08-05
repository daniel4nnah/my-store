import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [{
    id: '1',
    name: 'Bimineeeh',
    image: '../assets/images/bimini.jpg',
    price: 100
},
{
  id: '2',
  name: 'Crystal',
  image: '../assets/images/crystal.jpg',
  price: 100
},
{
id: '3',
name: 'Jaida',
image: '../assets/images/jaida.jpg',
price: 100
},
{
id: '4',
name: 'Sasha',
image: '../assets/images/sasha.jpg',
price: 100
},
]

  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    console.log(product);
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item)=> sum + item.price, 0)
  }
}
