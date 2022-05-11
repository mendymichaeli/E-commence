import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from 'src/app/services/carts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  search:string

  constructor(public cartService:CartsService,
              public router: Router,
              public usersService:UsersService) { 
    this.cartService.onLoading()
  }

  
  ngOnInit(): void {
  }

}
