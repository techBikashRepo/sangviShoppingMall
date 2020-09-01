import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _dataService: DataService) { }

  private products(): Observable<Product[]> {
    let data = this._dataService.get(Global.BASE_USER_ENDPOINT + "ProductMaster/GetProductList");
    return data;
  }

  // get Products
  public getProducts(): Observable<Product[]> {
    return this.products();
  }

}
