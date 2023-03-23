import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  items: Item[] = [
    {id: 1, name: 'kacchi', price: 300, quantity: 1},
    {id: 2, name: 'polao', price: 360, quantity: 0},
    {id: 3, name: 'kacchi-package', price: 810, quantity: 3},
    {id: 4, name: '5-combo', price: 1300, quantity: 5},
  ]

  itemToBeUpdated: Item = new Item()


  getItems(): Item[] {
    return this.items
  }

  buy(item: Item): void {
    item.quantity--
  }

  setItemsToBeUpdated(index: number): void {
    let item = this.items.at(index)
    if(item!=null) {
      this.itemToBeUpdated = item
    }
  }

  getItemsToBeUpdated(): Item {
    return this.itemToBeUpdated
  }
  
}
