import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';
import { OrdersService } from 'src/app/services/orders.service';
import { UsersService } from 'src/app/services/users.service';
import { ValidationService } from 'src/app/services/validation.service';
import { user } from '../../models/models';
import { loginUser } from '../../models/models';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  currentDiv= "register1";
  user:user= new user()
  loginUser:loginUser= new loginUser()
  confirmPassword:string;
  erorr:string='';
  currentUser
  

  constructor(public nav:Router,
              public validationService:ValidationService,
              public orderService:OrdersService,
              public usersService: UsersService,
              public cartService:CartsService) 
    {
    console.log("userId: ",this.usersService.userId)
    console.log("is userLogged? constructor :", this.usersService.userLogged)
    console.log("is userLogged? constructor :", this.usersService.user)
    console.log("is userLogged? constructor :", this.usersService.loginCheckResult)

    this.onload()
   }

  ngOnInit(): void {
  }

  async onload(){
    await this.orderService.getCities()
  }
  
  /* checks levels on register for new user */
  async changeCurrentDiv(newDiv:string,level:string){
    console.log(this.user);
    let validate = await this.validationService.checkFormFiels(level,this.user);
    console.log("Validate: ",validate );
    if (validate) {
      console.log("isValidate");
      this.currentDiv= newDiv
      if(validate&&level=='level2'){
        console.log('register2')
        let currentUser= await this.usersService.createUser(this.user) as user;
        console.log("currentUser:",currentUser)
        this.loginUser.email=currentUser.email
        this.loginUser.password=currentUser.password
        this.login('userLogged')
        this.user = new user()
        alert("your'e successfully registered!!!")
        this.currentDiv='register1'
        this.validationService.confirmPassword==""
      }
    } 
  }

  async login(status:string){
    console.log("loginUser:",this.loginUser)
    console.log("status:",status)
    let validate = await this.validationService.checkLogginFields(this.loginUser)
    console.log("isvalidate:",validate)
    if(validate)
    await this.usersService.loginCheck(this.loginUser)
    console.log("loginCheckResult :",this.usersService.loginCheckResult)
    if( this.usersService.loginCheckResult!=null){
      let myObj={
        userLogged:true,
        userId:this.usersService.loginCheckResult.id,
        role:this.usersService.loginCheckResult.role
      }
      sessionStorage.setItem("sessionForLoggin",JSON.stringify(myObj))
      console.log("sessionForLoggin:",sessionStorage.getItem("sessionForLoggin"))
      this.usersService.userId=this.usersService.loginCheckResult.id
      this.usersService.userLogged=true
      this.usersService.role=this.usersService.loginCheckResult.role
      await this.cartService.getCartByUserId()
      this.currentDiv= status 
      await this.orderService.getAllOrders()
      console.log("cartProducts: ",this.cartService.cartProducts)
      console.log("role: ",this.usersService.role)
      console.log("is userLogged? ",this.usersService.userLogged)
      
    }else{
      alert('somethimg went wrong!!!')
    }
  console.log("is userLogged? login:",this.usersService.userLogged) 
  }
}
