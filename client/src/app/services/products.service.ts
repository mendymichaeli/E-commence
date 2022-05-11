import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Category } from '../models/models';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  categories: Array<Category> = new Array();
  products: Array<Product> = new Array();
  filterProducts: Array<Product> = new Array();
  selectedProduct:Product
  isEdit:boolean=false
  isAdd:boolean=false
  
  constructor(public api: ApiService) { 
    
  }

  searchProduct(value: string) {
    console.log("Value : ", value)
    this.filterProducts = this.products;

    this.filterProducts = this.products.filter((product: any) => {
      console.log("product : ", product)
      return product.name.includes(value)
    })
  }
  changeEditAdd(type){
   if(type==1){
    this.isEdit=true
    this.isAdd=false
    console.log("isEdit:",this.isEdit)
   }else{
    this.isEdit=false
    this.isAdd=!this.isAdd
    console.log("isAdd:",this.isAdd)
   }
    
  }

  async getAllCategories() {
    this.categories = await this.api.createGetService('/products/getAllCategories') as Array<Category>
    console.log("/products/getAllCategories : ", this.categories)
  }
  async getAllProducts() {
    this.products = await this.api.createGetService('/products/getAllProducts') as Array<Product>
    console.log("products : ", this.products)
    this.filterProducts = this.products;
    console.log("/products/getAllProducts (filter):",this.filterProducts)
  }
  async getProductsByCategory(id) {
    this.products = await this.api.createGetService('/products/getProductsByCategory?id='+id) as Array<Product>
    console.log("/products/getProductsByCategory : ", this.products)
    this.filterProducts = this.products;
  }
  async getProductById(id) {
    this.selectedProduct = await this.api.createGetService('/products/getProductsById?id='+id) as Product
    console.log("'/products/getProductsById?id=' : ", this.selectedProduct)
    
  }
  async createProduct(Product: Product) {
    console.log("produtc to service: ",Product)
    let result = await this.api.createPostService('/products/createProduct', Product) 
    console.log("/products/createProduct: ",result);
    await this.getAllProducts()
  }
  async updateProductById(Product: Product) {
    console.log("produtc to service: ",Product)
    let result = await this.api.createPostService('/products/updateProductById', Product) 
    console.log('/products/updateProductById: ',result);
    if(result==1){
      alert("product has been updated")
      await this.getAllProducts()
    }
    
  }
  
  /* async getCommentByGameId(gameId: number) {
    this.categories = await this.api.createGetService('/product/getCommentsbyGameId?gameId=' + gameId) as Array<Category>
    console.log("Comments : ", this.categories)
  }
 */
  /* async addComment(comment: Comment) {
    let result = await this.api.createPostService('/comments/addComment', comment) as Array<Comment>
    console.log(result);
  } */
}
