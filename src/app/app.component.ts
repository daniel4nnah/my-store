import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {Queen} from './queens.model'
import { Product } from '../models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent="";
  showImg = true;

  toggleImage(){
    this.showImg = !this.showImg;

  }

  title = 'my-store';
  widthImg= 10;
  btnDisabled = true;
  name = "Lau";
  //age: number = 21;
  img = 'https://media.tenor.com/images/7f0ef936a94e093d1355859ca7da5c82/tenor.png';

  onLoaded(img: string){
    console.log("Loaded en padre", img);
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  box={
    width: 100,
    height: 100,
    background: 'red'
  }
  person = {
    nombre: "Daniela",
    age: 15,
  }

  dragqueen = {
    nombre : '',
    season: '',
  }

  drags = [{nombre:'Bimini Bon Boulash', season:'UK2'}, {nombre:'Crystal Methyd', season:'S12'}, {nombre:'Bob the Drag Queen', season:'S8'}]
  newDrag = {nombre: '', season: ''};

  names: string[] = ['Lau', 'Miguel', 'Diego']
  newName = '';
  generalCounter: number = 0;
  subtotal: number = 0;

  queens: Queen[] = [
    {
      name: 'Sasha Velour',
      price: 150,
      image: './assets/images/sasha.jpg',
      counter: 0
    },
    {
      name: 'Bimini',
      price: 500,
      image: './assets/images/bimini.jpg',
      counter: 0

    },
    {
      name: 'Bob',
      price: 600,
      image: './assets/images/bob.jpg',
      category: 'Comedy Queen',
      counter: 0
    },
    {
      name: 'Crystal',
      price: 450,
      image: './assets/images/crystal.jpg',
      counter: 0
    },
    {
      name: 'Jaida',
      price: 450,
      image: './assets/images/jaida.jpg',
      counter: 0
    },
    {
      name: 'Jinkx',
      price: 450,
      image: './assets/images/jinkx.jpg',
      counter: 0
    }
  ]

  agregarEntrada(index: number){
    this.generalCounter++,
    this.queens[index].counter++,
    this.subtotal = this.subtotal + this.queens[index].price
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled; //Esto niega el estado que esté, si está false se pasa a true y viceversa.

  }

  ageIncrement() {

    this.person.age<20 ? this.person.age++ : console.log("This cannot be greater than 100")
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.nombre = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  addDragQueen(){
    this.drags.push({nombre: this.newDrag.nombre, season: this.newDrag.season})
    this.newDrag={nombre: '', season: ''};
  }

  eliminarDrag(index: number){
    this.drags.splice(index, 1)
  }

  onRegister(){
    console.log(this.register)
    this.register.name = '',
    this.register.email = '',
    this.register.password = ''
  }

  onLogin(){
    console.log(this.register)
  }

}
