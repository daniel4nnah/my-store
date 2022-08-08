import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  getAllProducts(){
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
}
