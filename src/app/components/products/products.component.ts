import { Component, OnInit } from '@angular/core';
import { Product, CreateProductDTO } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [];

  showProduct = false;

  chosenProduct: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: ''
    },
    description: ''
  };

  // fecha = new Date();
  // date = new Date(2022, 1, 1);

  constructor (
    private storeService: StoreService,
    private productsService: ProductsService      //este servicio hace una petición asíncrona, por lo que debe de ir en ngOnInit
    ) {
      this.myShoppingCart = storeService.getShoppingCart();
    }

  ngOnInit(): void {
    this.productsService.getAllProducts()         //Con los observables de angular, debemos usar el método
    .subscribe(data => {                          //.subscribe
      this.products = data;                       //el objeto data está tipado en el products.service para que 'data', sea un array de tipo Product[]
    });
  }

  onAddtoShopping(product: Product){
    // this.myShoppingCart.push(product);  Este método serviría si tuvieramos todo junto, i.e., esto es lógica de negocio, lo cual debería ser sumministrado por un servicio (store.service)
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProduct(){
    this.showProduct = !this.showProduct;
  }

  onShowDetail(id: string){
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.toggleProduct();
      this.chosenProduct = data;
    })
  }

  createProduct(){
    const product: CreateProductDTO = {
    images: [''],
    title: 'New Product',
    price: 10,
    description: 'blablabla',
    categoryId: 2
    }
    
    this.productsService.create(product)
    .subscribe(data => {
      console.log(data);
    });

  }

}
