import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { apiUrl } from 'src/environments/environment';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl= `${apiUrl}/orders`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Order []> {
    return this.http.get<Order []>(`${this.orderUrl}`).pipe();
}
getOrder(id:number): Observable<Order> {
  return this.http.get<Order>(`${this.orderUrl}/${id}`);
}

}
