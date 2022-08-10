import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CreateProductDTO, Product, UpdateProductDTO } from 'src/models/product.model';

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

  createProduct(dto: CreateProductDTO){
    return this.http.post<Product>(this.apiUrl, dto);
  }

  updateProduct(id: string, dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
    // PUT -> Enviamos toooda la información, así sólo se haya cambiado un valor
    // PATCH -> Hacer edición de un atributo en particular
  }
}
