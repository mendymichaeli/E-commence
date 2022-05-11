import {Component} from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartsService } from 'src/app/services/carts.service';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';
import { selectedProduct } from '../../models/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 
selectedProduct:selectedProduct;
products:any;
search:string="";
quntityOfSelected:any
content:any
currentCategoryId:number

  constructor(private modalService: NgbModal,
              public productsService: ProductsService,
              public cartService:CartsService,
              public usersService:UsersService) 
              {
    this.onloading()
  }

  async onloading(){
    console.log("onloading")
   await this.productsService.getAllCategories()
   await this.productsService.getAllProducts()
  }

/* MODAL WHIT CURRENT PRODUCT */
  open(content,currentProduct:any) {
    this.productsService.changeEditAdd(1)
    if(!this.usersService.role)
    this.modalService.open(content)
    this.selectedProduct=currentProduct
    this.productsService.selectedProduct=currentProduct
    if(!this.usersService.role||this.usersService.role==undefined)
    this.findQuntitySelected(this.selectedProduct.id)
    console.log(this.selectedProduct.id)
  }

/* NUMBER OF SELECTED PRODUCT */
  async findQuntitySelected(id:number){
    console.log("id:",id)
    console.log("this.cartService.cartProducts:",this.cartService.cartProducts)
    await this.productsService.getProductById(id)
    console.log("selected Product: ", this.productsService.selectedProduct)
    await this.cartService.getQuantityForModel(id)
    console.log("this.quntityOfSelected  :",this.quntityOfSelected)
  }

  /* UPDATE NUMBER OF PRODUCT */

 async updateQuantityById(product,type:number){
   if(this.cartService.quntityOfSelected==0&&type==0){
     return
   }
    console.log("this.cartService.SelectedFromCart:",this.cartService.SelectedFromCart)
    await this.cartService.updateQuantityById(product,type)
    this.findQuntitySelected(product.id)
    console.log("this.quntityOfSelected  :",this.quntityOfSelected)
    
  }
/* SORT PRODUCTS BY CATEGORY */
   async getProductsByCategoryId(id:number){
     this.currentCategoryId=id
    console.log("id:",id)
    await this.productsService.getProductsByCategory(id)
    console.log("products:",this.productsService.products)
    console.log("filterProducts:",this.productsService.filterProducts)
  }  


}

