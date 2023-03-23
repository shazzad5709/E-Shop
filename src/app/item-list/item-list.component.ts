import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  
  constructor(private itemService: ItemService, private router: Router) { }

  myItems: Item[] = []

  ngOnInit(): void {
    this.myItems = this.itemService.getItems()
    console.log(this.myItems)
  }

  requestItem(item_name: String): void{
    alert('item ' + item_name + ' requested')
  }

  buyItem(item: Item) : void{
    this.itemService.buy(item)
  }

  update(index: number) : void {
    this.itemService.setItemsToBeUpdated(index)
    this.router.navigate(['update'])
  }
}
