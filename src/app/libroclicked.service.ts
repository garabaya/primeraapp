import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibroclickedService {

  libro: Array<object>;

  constructor() {
    this.libro = [];
  }

  libroVisto(libroVisto) {
    this.libro.push(libroVisto);
  }

  verListado() {
    if(this.libroVisto.length > 0) {
      return this.libro;
    } else {
      return false;
    }
  }
}
