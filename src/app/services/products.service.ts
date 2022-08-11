import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { retry } from 'rxjs/operators'

import { CreateProductDTO, Product, UpdateProductDTO } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient ) { }
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  getAllProducts(limit?: number, offset?: number){
    let params = new HttpParams();
    if (limit != null && offset != null){
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, {params}).
    pipe(
      retry(3)
    );
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

  deleteProduct(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset}
    })
  }
}
