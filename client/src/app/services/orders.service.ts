import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { orderCount } from '../models/models';
import { cities } from '../models/models';
import { allOrders } from '../models/models';
import { singleOrder } from '../models/models';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersNum:orderCount
  cities:cities
  allOrders=new allOrders()
  createdOrder=new allOrders()
  newOrder=new allOrders()
  deliveryDate:any
 
  deliveryDateRsult:any
  isError:{
    order:string
  }

  constructor(public api:ApiService,
    public usersService:UsersService,
   ) { 
    
  }
   async getCities(){
    this.cities = await this.api.createGetService('/orders/getAllCities') as cities
    console.log('/orders/getAllCities:',this.cities)
  } 

  async countOrders() {
    this.ordersNum = await this.api.createGetService('/orders/countOrders') as orderCount
    console.log('/orders/countOrders:', this.ordersNum)
  }
  async getAllOrders() {
    this.allOrders = await this.api.createGetService('/orders/getLatestOrder?userId='+this.usersService.userId) as allOrders
    console.log("/orders/getLatestOrder?userId=", this.allOrders)
  }
  async checkDeliveryDate(deliveryDate) {
    this.deliveryDateRsult = await this.api.createGetService('/orders/checkDeliveryDate?deliveryDate='+deliveryDate)
    console.log("/orders/checkDeliveryDate?deliveryDate= ", this.deliveryDateRsult) 
  }
  async createOrder(newOrder) {
    console.log("order: ",newOrder)
    this.createdOrder = await this.api.createPostService('/orders/createOrder',newOrder) as allOrders
    console.log("/orders/createOrder: ", this.createdOrder)
  }

}
