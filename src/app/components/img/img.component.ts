import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';   //el input recibe información desde el componente padre
  @Output() loaded = new EventEmitter<string>();     //el output manda información desde el componente hijo, NECESITA una nueva instancia de EventEmitter
  imgDefault = './assets/default.png';

  constructor() { }

  ngOnInit(): void {
  }


  imgError(){
    this.img = this.imgDefault;
  }

  imgLoad(){
    console.log('log h');             //
    this.loaded.emit(this.img);       //Este evento es necesario para enviar la info al padre
  }                                   //

}
