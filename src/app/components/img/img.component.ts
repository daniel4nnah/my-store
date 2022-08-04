import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  //@Input() img: string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    console.log('change just img => ', this.img);
  }

  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/crystal.jpg';
  // counter = 0;
  // counterFn: number  | undefined;

  constructor() {
    //before render
    // NO async -- once time
    console.log('constructor', 'imgValue => ', this.img);
  }

  //Before render (==> Antes de que angular monte el componente.)
  // Async - fetch -- runs only one time
  ngOnInit(): void {
    console.log('ngOnInit', 'imgValue => ', this.img);
    // this.counterFn = window.setInterval(() =>{
    //   this.counter +=1;
    //   console.log('run counter')
    // }, 1000);
  }

  // Before and during render.
  // Actualiza los cambios en los inputs
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', 'imgValue => ', this.img);
    console.log(changes);

  }

  //After render.
  // Maneja los hijos
  ngAfterViewInit() {
    console.log('ngOnChanges');

  }

  //Delete render.
  ngOnDestroy() {
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);

  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('Loaded en hijo');
    this.loaded.emit(this.img);
  }

}
