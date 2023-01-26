import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { DeliveryType } from '../models/DeliveryType';

@Injectable({
  providedIn: 'root'
})
export class DeliveryTypeService {
  private deliveryTypeUrl = `${apiUrl}/deliveryType`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<DeliveryType[]> {
    return this.http.get<DeliveryType[]>(`${this.deliveryTypeUrl}`).pipe();
  }
}
