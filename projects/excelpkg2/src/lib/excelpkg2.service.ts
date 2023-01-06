import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Excelpkg2Service {
  constructor(private httpClient: HttpClient) { }

  getSheetData(url: string, sheetId: string): Observable<any> {
    return this.httpClient.get(`${url}/${sheetId}`);
  }

  postSheetObj(url: string,id: string, data: any): Observable<any> {
    return this.httpClient.post(`${url}/${id}`, data);
  }
}
