import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?: number){
    let params = new HttpParams();
    if (limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<Product[]>(this.apiUrl, { params }) //al encerrar entre <> a Product[], lo estamos tipando para que devuelva data como un array de este tipo
    .pipe(
      retry(3)
    );
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`);  //esta es la forma en que se concatenan variables en js
  }

  getProductsByPage(limit: number, offset: number){
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: {limit, offset}
    });
  }

  create(dto: CreateProductDTO){
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: string, dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

}
