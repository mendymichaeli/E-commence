

export class Category {
    id: number = 0;
    category: string = "";
}
export class Product {
    id: number ;
    categoryId: number;
    name: string = "";
    price: string = "";
    image: string = "";
    createdAt: string ;
    updatedAt: string ;
}
export class ProductToCart {
  
    productId: number;
    cartId: number 
    price: number 
    quantity:number;
}

export class CartProduct {
    id: number = 0;
    name: string = "";
    price: string = "";
    image: string = "";
    quantity: string = "";
    createdAt: string = "";
    updatedAt: string = "";
}
export class Cart {
    id: number ;
    userId: number;
    createTime:string =new Date().toLocaleDateString();
    isOpen: boolean;
  
}
export class selectedProduct {
    id: number = 0;
    name: string = "";
    price: string = "";
    image: string = "";
    createdAt: string = "";
    updatedAt: string = "";
}
export class orderCount {
    count: number;
     rows=[]

}
export class cities {
    id:number;
    name:string;

}
export class quantityUpdate {
    cartId:number;
    productId:number;
    type:number;
    quantity:number;

}
export class allOrders {
    id:number;
    cartId:number;
    userId:number;
    creditFourNumer:string;
    totalPrice:string;
    orderDate:string=new Date().toLocaleDateString();
    deliveryDate:string;
    city:string;
    street:string;
}

export class user {
    id:number;
    role:boolean=false;
    firstName:string="";
    lastName:string="";
    street:string="";
    city:string="";
    email:string="";
    password:string="";
    personalId:number;
    createdAt:string;
    updatedAt:string;
}
export class loginUser {
    email:string="";
    password:string="";
   
}
export class singleOrder {
   
    orderDate:string="";
   
}
