import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public usersService:UsersService,
              public router:Router) { 
    
  }
  
  ngOnInit(): void {
  }
 
  async logout(){ 
    this.usersService.userId=0
    this.usersService.userLogged=undefined
    this.usersService.role=undefined
    sessionStorage.clear();
    await this.router.navigate(['/'])
    window.location.reload()
  }
  
  homeBtn(){
    this.router.navigate(['/'])
  }
}

