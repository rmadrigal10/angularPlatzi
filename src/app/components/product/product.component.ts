import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() product: Product = {   //al hacer esto, necesitams inicializar nuestro product
    id: '',                       //podemos hacerlo como esta en el bloque de código, o
    price: 0,                     //podemos inicaiarlo así => product!: Product;
    title: '',
    images: [],
    description: '',
    category: {
      id: '',
      name: ''
    }
  };

  @Output()addedProduct = new EventEmitter<Product>();
  @Output()showProduct = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onAddtoCart(){
    this.addedProduct.emit(this.product);
  }

  onShowDetail(){
    this.showProduct.emit(this.product.id);
  }

}
