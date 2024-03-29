import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IFruit} from '../models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  API_URI='http://localhost:4000/api'
  constructor(private http:HttpClient) {}

    
    getFruits() {
      return this.http.get<any[]>(`${this.API_URI}/fruits`);
    }
  
    getFruit(id: string) {
      return this.http.get(`${this.API_URI}/fruits/${id}`);
    }
  
    deleteFruit(id: string) {
      return this.http.delete(`${this.API_URI}/fruits/${id}`);
    }
  
    saveFruit(fruit: IFruit) {
      return this.http.post(`${this.API_URI}/fruits`, fruit);
    }

    updateFruit(id: string|number, updatedFruit: IFruit) {
      console.log(updatedFruit)
      return this.http.patch(`${this.API_URI}/fruits/${id}`, updatedFruit);
    }

   
}
