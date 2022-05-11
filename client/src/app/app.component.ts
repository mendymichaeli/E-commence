import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(public usersService:UsersService) { 
    let sessionForLoggin = JSON.parse(sessionStorage.getItem("sessionForLoggin"));
    console.log("session: id: ",sessionForLoggin)
    if(sessionForLoggin!=null){
      this.usersService.userId=sessionForLoggin.userId
      this.usersService.userLogged=sessionForLoggin.userLogged
      this.usersService.role=sessionForLoggin.role
    }
  }
}
