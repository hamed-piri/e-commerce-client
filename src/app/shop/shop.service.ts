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
    if (shopParams.typeId > 0) params = params.append('typeId', shopParams.typeId);

    if (shopParams.search) {
      params = params = params.append('Search', shopParams.search);
    }

    params = params.append('Sort', shopParams.sort);
    params = params.append('PageIndex', shopParams.pageNumber);
    params = params.append('PageSize', shopParams.pageSize);
    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products',{params})
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
