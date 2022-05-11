import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  GlobalUrl = "http://www.localhost:5000";

  constructor(private httpClient: HttpClient) { }

  createGetService(url: string) {
    console.log(url)
    return new Promise(async (resolve, reject) => {
      try {console.log("gol2")
        await this.httpClient.get(this.GlobalUrl + url).subscribe(data => {
          console.log("data:",data)
          resolve(data);
          
        }, error => {
          console.log('oops', error, error.error)
        });
      } catch (err) {
        console.log("ERRORRR : ", err)
        console.log(err);
      }
    });
  }


  createPostService(url: string, obj: any) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.httpClient.post(this.GlobalUrl + url, obj).subscribe(data => {
          resolve(data);
        }, error => {
          console.log('oops', error, error.error)
        });
      } catch (err) {
        console.log("ERRORRR : ", err)
        console.log(err);
      }
    });
  }
}