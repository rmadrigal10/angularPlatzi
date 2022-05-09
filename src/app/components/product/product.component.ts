import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() product: Product = {   //al hacer esto, necesitams inicializar nuestro product
    id: '',                       //podemos hacerlo como esta en el código sin comentar, o
    price: 0,                     //podemos inicaiarlo así => product!: Product;
    name: '',
    image: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
