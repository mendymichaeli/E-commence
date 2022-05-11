import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartsService } from 'src/app/services/carts.service';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from 'src/app/services/users.service';
import { ValidationService } from 'src/app/services/validation.service';
import { allOrders, cities } from '../../models/models';
import * as xlsx from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @ViewChild('invoice', { static: false }) invoice: ElementRef;

  cities:cities
  deliveryDate:boolean
  order=new allOrders()
  cityDblClick:string
  constructor(public orderService:OrdersService,
    public cartService:CartsService,
    public validationService:ValidationService,
    public usersService:UsersService,
    public router: Router,
    private modalService: NgbModal) { 
    this.onload()
  }

  async onload(){
    await this.orderService.getCities()
    await this.usersService.getUser(this.usersService.userId)
    this.cities =  this.orderService.cities
    console.log("cities", this.orderService.cities)
  }

 /* check if there are 3 order in the same date */
  async checkDeliveryDate(deliveryDate){
    console.log("deliveryDate deliver:",deliveryDate)
    await this.orderService.checkDeliveryDate(deliveryDate)
    let result = await this.orderService.deliveryDateRsult
    console.log("deliveryDateRsult:",result)
    if(result.length>2){
      console.log("result.length>2: true")
      this.validationService.deliveryDate=true
      console.log(" this.validationService.deliveryDate", this.validationService.deliveryDate)
      this.deliveryDate= await this.validationService.checkOrder()
      console.log("this.deliveryDate:", this.deliveryDate)
    }else{
      this.validationService.deliveryDate=false
      this.deliveryDate= await this.validationService.checkOrder()
      console.log("this.deliveryDate:", this.deliveryDate)
    }
  }

  /* order button function */
  async open(content) { 
    this.order.cartId=this.cartService.cartIdOpen;
    this.order.userId=this.usersService.userId
    this.order.totalPrice=String(this.cartService.totalOrder)
    console.log("order::", this.order)
    console.log("orderDate:",this.deliveryDate)
    console.log("this.orderService.orderDate:",this.orderService.deliveryDate)
    let validate = await this.validationService.checkOrderForm(this.order);
    console.log("Validate: ",validate );
    if (validate) {
      console.log("order::", this.order)
      if(this.deliveryDate==true){
        console.log("this.order",this.order)
        await this.orderService.createOrder(this.order)
        console.log("this.order after",this.order)
       
        this.modalService.open(content,{ backdrop: 'static'})
        console.log(content)
        await this.router.navigate(['/'])
      }
    } 
  }
/* auto fill up by double click on input */
  fillUpByDblclick(address){
      console.log("address:",address)
    if(address=="city"){
        this.cityDblClick=this.usersService.user[0].city
        this.order.city=this.usersService.user[0].city
        console.log("this.order.city:",this.order.city)
    }else if(address=="street"){
        this.order.street=this.usersService.user[0].street
        console.log("this.order.street:",this.order.street)
    }
  }
  
  ngOnInit(): void {
  }

  /*test for invoice -- works with table html only*/
  exportToExcel() {
    console.log("this.invoice.nativeElement:",this.invoice.nativeElement)
    const ws: xlsx.WorkSheet =xlsx.utils.table_to_sheet(this.invoice.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'invoice.xlsx');
    window.location.reload()
   }

}
