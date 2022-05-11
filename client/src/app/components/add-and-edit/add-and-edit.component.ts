import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/models';

@Component({
  selector: 'app-add-and-edit',
  templateUrl: './add-and-edit.component.html',
  styleUrls: ['./add-and-edit.component.css']
})
export class AddAndEditComponent implements OnInit {
  
  isAdd:boolean=false
  isEdit:boolean=false
  product=new Product()
  imgResult:any
  constructor(public productsService:ProductsService,public api:ApiService) { 
    this.onload()
  }

  async onload(){
    await this.productsService.getAllCategories()
  }
/*  */
  changeEditAdd(){
    this.productsService.changeEditAdd(0)
  }
  /* louding image to edit/add product */
  async uploadImageChange(event){
    console.log("event:",event.target.files)
    if(event.target.files.length>0){
      let file = event.target.files[0];
      const formData = new FormData();
      formData.append("uploads[]",file,file['name']);  
      this.imgResult =await this.api.createPostService("/upload", formData)
      console.log("result image:",this.imgResult.path)
      this.product.image=this.imgResult.path
      console.log("result image:",  this.product)
      }          
  }
  
  async onSave(){
    console.log("save this.product:",this.product)
    if(this.product.categoryId>0 && this.product.name!="" && this.product.price!="" && this.product.image!=""){
     await this.productsService.createProduct(this.product)
      this.productsService.getAllProducts()
      this.product=new Product() 
    }else{
      alert("fill up all fields")
    }
  }

  async onEdit(){
    this.product.id=this.productsService.selectedProduct.id
    console.log("this.product:",this.product)
    if(this.product.categoryId>0 && this.product.name!="" && this.product.price!="" ){
      if(this.product.image=="")
      this.product.image=this.productsService.selectedProduct.image 
      console.log(" this.product.image:", this.product.image)
      await this.productsService.updateProductById(this.product)
      this.product=new Product()
    }else{
      alert("fill up all fields")
    }
    
    console.log("this.product:",this.product.categoryId)
  }
  closeEdit(){
    this.productsService.isEdit=false
  }
  ngOnInit(): void {
  }

}
