import { Component, OnInit } from '@angular/core';
import { MakeupItem } from '../../models/MakeupItem';
import { MakeupItemService } from '../../services/makeup-item.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MakeupItem[] = [];

  constructor( private makeupItemService: MakeupItemService) {}
  ngOnInit(): void {
    this.makeupItemService.getAll().subscribe(data=>{
      console.log(data);
      this.items=data;
    });
  }

}
