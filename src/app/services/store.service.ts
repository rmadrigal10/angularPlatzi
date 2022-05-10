import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { BehaviorSubject } from 'rxjs';         //Tare la ibrería de observables

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];  //el establecer el método como privado, protege la informacion y su estructura
  private myCart = new BehaviorSubject<Product[]>([]);  //Necesario para poder tener observables

  myCart$ = this.myCart.asObservable();                 //Necesario para poder tener observables

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);              //Necesario para poder tener observables
  }

  getShoppingCart(){                      //
    return this.myShoppingCart;           // Este método complementa la accesibilidad privada para poder devolver el objeto myShoppingCart
  }                                       //

  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
