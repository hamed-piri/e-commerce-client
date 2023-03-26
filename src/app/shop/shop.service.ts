import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {Product} from "../shared/models/product";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/productType";
import {ShopParams} from "../shared/models/shopParams";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getProducts(
    shopParams: ShopParams
  ){
    let params = new HttpParams();

    if (shopParams.brandId > 0) params = params.append('brandId', shopParams.brandId);
    if (shopParams.typeId) params = params.append('typeId', shopParams.typeId);
    if (shopParams.sort) params = params.append('Sort', shopParams.sort);
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products',{params})
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
