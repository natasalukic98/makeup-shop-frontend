import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { OrderItem } from '../models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  
    private orderItemUrl = `${apiUrl}/orderItems`;
  
    constructor(private http: HttpClient) { }
  
    getAll(): Observable<OrderItem[]> {
      return this.http.get<OrderItem[]>(`${this.orderItemUrl}`).pipe();
    }
    getMakeupItem(id: number): Observable<OrderItem> {
      return this.http.get<OrderItem>(`${this.orderItemUrl}/${id}`);
    }
  }

