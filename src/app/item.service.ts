import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  items: Item[] = [
    {id: 1, name: 'kacchi', price: 300, quantity: 1},
    {id: 2, name: 'polao', price: 360, quantity: 2},
    {id: 3, name: 'kacchi-package', price: 810, quantity: 3},
    {id: 4, name: '5-combo', price: 1300, quantity: 5},
  ]

  getItems(): Item[] {
    return this.items
  }
  
}
