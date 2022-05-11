import { Injectable } from '@angular/core';
import { user } from '../models/models';
import { loginUser } from '../models/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public role:boolean
  public userId:number=0 /* ---------------------AAAAAA------CHANGE-----------AAAAAAAA------------ */
  public user:any 
  public userLogged:boolean/* ---------------------AAAAAA------CHANGE-----------AAAAAAAA------------ */
  public loginCheckResult
  constructor(public api:ApiService) { }


  async getUser(id:number) {
    this.user = await this.api.createGetService('/users/getUserById?id='+id) as Array<user>
    console.log("/users/getUserById: ", this.user)
    
  }

  async createUser( User: user) {
    console.log("produtc to service: ",User)
    let result = await this.api.createPostService('/users/register', User) 
    console.log("users/register:",result);
    return result
  }

  async loginCheck( loginUser: loginUser) {
    console.log("loginUser",loginUser)
    this.loginCheckResult = await this.api.createPostService('/users/loginCheck', loginUser) 
    console.log("/users/loginCheck:", this.loginCheckResult);
  }

}


