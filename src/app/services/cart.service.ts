
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartitemslist:any = [];
  public productlist = new BehaviorSubject<any>([])
 constructor() { }





//get product function..........................................!
 getproduct(){
 return this.productlist.asObservable();
 }
//set product function .........................................!
 setproduct(product:any){
  this.cartitemslist.push(...product)
 }
//add to cart function .........................................!
 addtocart(product:any){
  this.cartitemslist.push(product);
  this.productlist.next(this.cartitemslist);
  this.gettotalprice()

 }
// get total price function called.............................!
 gettotalprice() :number{
  let totalgrant = 0;
  this.cartitemslist.map((a:any)=>{
    totalgrant+= a.totalgrant
  })
  return totalgrant
 }
//remove cart item function ....................................!
romovecartitems(product:any){
  this.cartitemslist.map((a:any , index:any)=>{
if(product.id ===a.id){
  this.cartitemslist.splice(index , 1)
}
  })
  this.productlist.next(this.cartitemslist)
}
//remove all cart list function .................................!
removeallcartlist(){
  this.cartitemslist = []
  this.productlist.next(this.cartitemslist)
}
}
