import { Injectable } from '@angular/core';
import { user,allOrders,loginUser } from '../models/models';
import isIsraeliIdValid from 'israeli-id-validator';
import { ApiService } from './api.service';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  user:user =new user()
  loginUser:loginUser =new loginUser()
  deliveryDate:boolean
  confirmPassword:string=''
  idCurrect:boolean
  idAlreadyUsed:boolean=false
  emailCurrect:boolean
  isError:any= {
    firstName:"",
    lastName:"",
    street:"",
    city:"",
    email:"",
    password:"",
    confirmPassword:"",
    orderDate:"",
    personalId:'',
    logginEmail:'',
    logginPassword:'',
    cartId:0,
    userId:0,
    creditFourNumer:'',
    totalPrice:'',
    deliveryDate:'',
    deliveryDateOrder:'',
    orderCity:'',
    orderStreet:''
  };


 
constructor( public api:ApiService,
  public orderService:OrdersService) { 
    console.log("idCurrect:",this.idCurrect)
    console.log("emailCurrect:",this.emailCurrect)
  }

  validateId(x){
    console.log("x:",x) // true
    console.log(isIsraeliIdValid(x)) // true
    if(String(x).length>0)
      this.idCurrect=isIsraeliIdValid(x)
  }

  validateEmail(email) {
       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase()); 
   }

  checkEmail(email){
    console.log("email:",email)
   if(email.length>1)
    this.emailCurrect=this.validateEmail(email)    
  }

  async checkIdInDB(personalId:number){
    console.log("personalId: ",personalId)
    let result = await this.api.createGetService('/users/checkId?personalId='+personalId)
    console.log("/users/checkId?personalId= ",result)
    if(result!=null){
      this.idAlreadyUsed=true
    } else{
      this.idAlreadyUsed=false
    } 
    console.log("personalId result1:",result);
    console.log("this.idAlreadyUsed1:",this.idAlreadyUsed);
  }

  async checkFormFiels(level:string,user:user) {
    await this.checkIdInDB(user.personalId)
  
    let flag = true;
    console.log("level:",level)
    console.log("user:",user)

    if(level=="level1"){
      console.log("isError: ",this.isError)
      console.log("this.user.email.length: ",user.email )
      console.log("this.emailCurrect: ",this.emailCurrect )
      console.log("this.idCurrect: ",this.idCurrect )
      console.log(" this.idAlreadyUsed: ",this.idAlreadyUsed )

      if (this.emailCurrect==false ||user.email==undefined||user.email==''){
        this.isError.email = " Please enter currect email "
        flag = false
      }else{
        this.isError.email = ''
      }

      if (this.idCurrect==false ||user.personalId==undefined) {
        this.isError.personalId = " incurrect ID"
        flag = false
      } else if(this.idAlreadyUsed){
        console.log(" this.idAlreadyUsed in checkForm: ",this.idAlreadyUsed )
        this.isError.personalId = " ID exsist in system, try to login!"
        flag = false
      } else{
        this.isError.personalId = ''
      }

      if (user.password.length < 2) {
        this.isError.password = " Password must contains at least 2 letters  "
        flag = false
      }else{
        this.isError.password = ''
      }

      if (user.password!=this.confirmPassword||this.confirmPassword=='') {
        this.isError.confirmPassword = " Please confirm your password  "
        flag = false
      }else{
        this.isError.confirmPassword = ''
      }
    }else if(level=="level2"){
      if (user.firstName.length < 2) {
        this.isError.firstName = " Please enter currect first name "
        flag = false
      }else{
        this.isError.firstName = ''
      }

      if (user.lastName.length < 2) {
        this.isError.lastName = " Please enter currect first name "
        flag = false
      }else{
        this.isError.lastName = ''
      }
      if (user.city =='') {
        this.isError.city = " Please select city "
        flag = false
      }else{
        this.isError.city = ''
      }

      if (user.street.length < 2) {
        this.isError.street = " please enter street "
        flag = false
      }else{
        this.isError.street = ''
      }
    }

    console.log("isError2: ",this.isError)
    console.log("flag last: ",flag)
    return flag;
      
  }

  async checkLogginFields(loginUser){
    let flag = true;
   
    console.log("true")
    if (loginUser.email.length<4||loginUser.email=='') {
      console.log("loginUser.email.length:",loginUser.email.length)
      console.log("loginUser.email:",loginUser.email)
      this.isError.logginEmail = "Please insert currect Email!"
      flag = false
    }else{
      this.isError.logginEmail = ''
    }

    if (loginUser.password.length<3||loginUser.password=='') {
      this.isError.logginPassword = "Password mast contain at least 2 letters!"
      flag = false
    }else{
      this.isError.logginPassword = ''
    }
    console.log("flag:",flag)
    return flag;
  }


  async checkOrder(){
    let flag = true;
    console.log("true")
    if (this.deliveryDate) {
      console.log("deliveryDate:true")
      this.isError.deliveryDate = " there are already 3 deliveries for this date, please select diffrent day! "
      flag = false
    }else{
      console.log("deliveryDate:false")
      this.isError.deliveryDate = ''
    }
    console.log("flag:",flag)
    return flag;
  }

  async checkOrderForm(order:allOrders) {
 
    let flag = true;
  
      console.log("order:",order)
      console.log("isError: ",this.isError)
      console.log("order.cartId: ",order.cartId )
      console.log("order.userId: ",order.userId )
      console.log("order.creditFourNumer: ",order.creditFourNumer )
      console.log("order.totalPrice: ",order.totalPrice )
      console.log("order.deliveryDateOrder: ",order.deliveryDate)
      console.log("order.city: ",order.city )
      console.log("order.street: ",order.street )
  
  
      if (order.cartId==undefined||order.cartId==0){
        this.isError.cartId = " there is no cart open "
        flag = false
      }else{
        this.isError.cartId = ''
      }
  
      if (order.userId==0 ||order.userId==undefined) {
        this.isError.userId = " there is no user ID"
        flag = false
      }else{
        this.isError.userId = ''
      }
  
      if (String(order.creditFourNumer).length < 8||order.creditFourNumer==undefined) {
        this.isError.creditFourNumer = " must contains at least 8 numbers  "
        flag = false
      }else{
        this.isError.creditFourNumer = ''
      }
  
      if (order.totalPrice=='0'||order.totalPrice==undefined) {
        this.isError.totalPrice = " No amount to charge (no totalPrice) "
        flag = false
      }else{
        this.isError.totalPrice = ''
      }
      
      if (this.deliveryDate=false ||order.deliveryDate==undefined) {
        this.isError.deliveryDateOrder = " Incurrent delivery date "
        flag = false
      }else{
        this.isError.deliveryDateOrder = ''
      }
     
      if (order.city==''||order.city==undefined) {
        this.isError.orderCity = " Please choose city "
        flag = false
      }else{
        this.isError.orderCity = ''
      }
     
      if (order.street==''||order.street==undefined) {
        this.isError.orderStreet = " Please insert street "
        flag = false
      }else{
        this.isError.orderStreet = ''
      }
    
  
    console.log("isError2: ",this.isError)
    console.log("flag last: ",flag)
    return flag;
    
  }
 
}

