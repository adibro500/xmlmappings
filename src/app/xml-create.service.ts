import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class XmlCreateService {

  constructor(private http:HttpClient) { }

  getXml(payload) {
    return this.http.post('http://localhost:3000/api/getXml', payload);
  }
}
