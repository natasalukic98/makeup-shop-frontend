import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from "rxjs";
import { apiUrl } from 'src/environments/environment';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = `${apiUrl}/orders`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.orderUrl}`).pipe();
  }
  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.orderUrl}/${id}`);
  }

  sendOrder(order: Order): Observable<Order> {
    return this.http.post(this.orderUrl, order).pipe(
      map(orderResponse => {
        return orderResponse as Order;
      }),
      catchError(() => {
        return throwError(() => {
        })
      })
    );
  }

}
