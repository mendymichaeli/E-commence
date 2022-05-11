import { Component, OnInit } from '@angular/core';
import { allOrders } from 'src/app/models/models';
import { CartsService } from 'src/app/services/carts.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  products:number
  ordersNum:number
  allOrders:allOrders
  constructor(public productsService: ProductsService,
              public ordersService:OrdersService,
              public usersService:UsersService,
              public cartService:CartsService) {
    this.onloading()
  }

  ngOnInit(): void {
  }

  async onloading(){
  
    await this.ordersService.countOrders()
    this.ordersNum=this.ordersService.ordersNum.count

    await this.productsService.getAllProducts()
    this.products=this.productsService.products.length

    await this.cartService.getCartByUserId()
  
    await this.ordersService.getAllOrders()
    this.allOrders=this.ordersService.allOrders
  

  }
}
