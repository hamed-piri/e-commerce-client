import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {Product} from "../shared/models/product";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/productType";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getProducts(
    brandId?: number,
    typeId?: number
  ){
    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId',brandId.toString());
    }
    if (typeId) {
      params = params.append('brandId',typeId.toString());
    }

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products',{params})
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
