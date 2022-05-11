import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Cart, CartProduct, ProductToCart } from '../models/models';
 import { quantityUpdate } from '../models/models'; 
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class CartsService {
  
  cart =new Cart()
  cartProducts:any
  product=new ProductToCart()
  cartIdOpen:number
  products:any
  quntityOfSelect:any
  quntityOfObj:quantityUpdate = new quantityUpdate()
  dateOpenCart:any
  SelectedFromCart:any
  quntityOfSelected=0
  totalOrder:number=0
  totalOrderArr:[]
  filterProducts
  disableOrderButton:boolean=true
  isProductExistInCart
  disabledMinus

  constructor(public api:ApiService,
              public userService:UsersService) { }
  
              
  async getCartByUserId() {
    this.cartProducts = await this.api.createGetService('/cart/getCartByUserId?userId='+this.userService.userId) as Array<CartProduct>
    console.log("/cart/getCartByUserId?userId= (only open): ", this.cartProducts)
    if( this.cartProducts!=null){
      this.dateOpenCart= this.cartProducts.createTime
      this.cartIdOpen=this.cartProducts.id
      if(this.cartProducts.cartProducts.length!=0){
        this.disableOrderButton=false
      }else{
        this.disableOrderButton=true
      }
      
      console.log("disableOrderButton", this.disableOrderButton)
      console.log("cartIdOpen", this.cartIdOpen)
    }
    
    
  }
  async getQuantityForModel(id){
    this.quntityOfSelected==0
    console.log(" this.cartProducts:", this.cartProducts)
    if( this.cartProducts!=null)
    this.SelectedFromCart=this.cartProducts.cartProducts.find(product=>{
      console.log("product.product  :",product.product.id)
      return product.product.id==id
    })
    console.log(" this.SelectedFromCart:", this.SelectedFromCart)
    console.log(" this.quntityOfSelected1:", this.quntityOfSelected)
    if(this.SelectedFromCart!=undefined){
      this.quntityOfSelected=this.SelectedFromCart.quantity
      console.log(" this.quntityOfSelected:", this.quntityOfSelected)
    }else if(this.SelectedFromCart==undefined){
      this.quntityOfSelected=0
      console.log(" this.quntityOfSelected3:", this.quntityOfSelected)
    }
    console.log(" this.quntityOfSelected2:", this.quntityOfSelected)

    if(this.quntityOfSelected==0){
      this.disabledMinus=true
    }
  }

  async onLoading(){
    await this.getCartByUserId()
    
    /* if there is cart in prosess */
    if(this.cartProducts){
      this.products =this.cartProducts.cartProducts
      console.log("cart products: ",this.products)
      this.filterProducts = this.products;
      console.log("this.filterProducts:",this.filterProducts)
  
      /* total calculate */
      this.totalOrder=0
      this.totalOrderArr= this.products.map(amount=>{
        console.log("amount:",amount)
        this.totalOrder+=Number(amount.price*amount.quantity)
        this.totalOrder=Number(this.totalOrder.toFixed(2))
        console.log("totalOrder:",this.totalOrder)
        return this.totalOrder
      }) 
      console.log("cart totalOrder: ",this.totalOrder)
    }
  }

  async updateQuantityById(selectedProduct,type:number){
    console.log("selectedProduct:",selectedProduct)
    console.log("cartProducts:",this.cartProducts)
    console.log("cartIdOpen:",this.cartIdOpen)
    if(this.cartIdOpen>0){
      console.log("there's an open cart ")
      console.log("cartProducts.cartProducts:",this.cartProducts.cartProducts)
      if(this.cartProducts.cartProducts.length!=0){
        console.log("there's an open cart and products exist")
        console.log("this.cartProducts.cartProducts", this.cartProducts.cartProducts)
          this.quntityOfSelect=this.cartProducts.cartProducts.find(product=>{
          console.log("product.product  :",product.product.id)
          return product.product.id==selectedProduct.id
          })
          console.log("quntityOfSelect:",this.quntityOfSelect)
          if(this.quntityOfSelect==undefined){
            console.log("there's an open cart and products exist but not like this")
            await this.addProductToCart(selectedProduct,this.cartIdOpen)
          }else{
            console.log("open cart and products are exist ")
            this.quntityOfObj.quantity=this.quntityOfSelect.quantity
            this.quntityOfObj.type=type
            this.quntityOfObj.cartId=this.quntityOfSelect.cartId 
            this.quntityOfObj.productId=this.quntityOfSelect.productId 
            console.log("updateQuantityById: this.quntityOfObj :",this.quntityOfObj)
            let result = await this.api.createPostService('/cart/updateQuantityById',this.quntityOfObj)
            console.log("/cart/updateQuantityById",result)
          }
      }else{
        console.log("there's an open cart but products not exist")
        await this.addProductToCart(selectedProduct,this.cartIdOpen)
        console.log("cartProducts.cartProducts==[] :",this.cartProducts.cartProducts)
      }
      console.log("quntityOfSelect:",this.quntityOfSelect)
    }else{
      this.cart.userId = this.userService.userId
      this.cart.isOpen = true
      console.log("this.cart:",this.cart)
      let result = await this.api.createPostService('/cart/openCart', this.cart) as Cart
      console.log("/cart/openCart: ",result) 
      console.log("no cart exist")
      this.cartIdOpen=result.id
      await this.addProductToCart(selectedProduct,this.cartIdOpen)
  
    } 
    await this.onLoading()
    this.getQuantityForModel(selectedProduct.id)
  }

  async addProductToCart(selectedProduct,cartId:number){
    this.product={
      price:selectedProduct.price,
      quantity: 1,
      cartId: cartId,
      productId:selectedProduct.id
    }
    console.log("this.product:",this.product)
    let result =await this.api.createPostService('/cart/addProduct', this.product)
    console.log("/cart/addProduct:",result)
  }
  
  searchProduct(value: string) {
    console.log("Value : ", value)
    this.filterProducts = this.products;
    this.filterProducts = this.products.filter((product: any) => {
      console.log("product : ", product)
      return product.product.name.includes(value)
    })
    console.log("this.filterProducts : ", this.filterProducts)
  }

 async deleteSingleProduct(productId){
  console.log("result delete productId:",productId)
  let result = await this.api.createGetService('/cart/deleteProductById?id='+productId)
  console.log("/cart/deleteProductById:",result)
  await this.onLoading()
  }
 async deleteAllProductsFromCart(cartId){
  let result = await this.api.createGetService('/cart/deleteAllProducts?cartId='+cartId)
  console.log("/cart/deleteAllProducts?cartId=",result)
  await this.onLoading()
  }
}
