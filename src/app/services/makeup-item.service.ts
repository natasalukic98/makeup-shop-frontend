import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { MakeupItem } from '../models/MakeupItem';

@Injectable({
  providedIn: 'root'
})
export class MakeupItemService {
  private makeupItemUrl = `${apiUrl}/makeupItems`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<MakeupItem[]> {
    return this.http.get<MakeupItem[]>(`${this.makeupItemUrl}`).pipe();
  }
  getMakeupItem(id: number): Observable<MakeupItem> {
    return this.http.get<MakeupItem>(`${this.makeupItemUrl}/${id}`);
  }
}
