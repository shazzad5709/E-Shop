import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  constructor(private itemService: ItemService, private router: Router) { }

  myItems: Item[] = []
  
  ngOnInit(): void {
    this.myItems = this.itemService.getItems()
    let item = this.itemService.getItemsToBeUpdated()
    console.log(item.name);
  }

  updateItem: Item = this.itemService.getItemsToBeUpdated()
  
  update() : void {
    this.router.navigate(['items'])
  }
}
