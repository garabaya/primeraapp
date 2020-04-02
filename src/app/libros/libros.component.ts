import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros: any;
  errorHttp: boolean;
  recibido: boolean;

  constructor(private http: HttpClient, public LibroClicked: LibroclickedService) {
    this.recibido= false;
    this.errorHttp= false;
  }

  ngOnInit(): void {
    this.cargarLista();
  }
  cargarLista() {
    this.http.get('assets/lista-libros.json').subscribe(
      (respuesta: Response) => {this.libros = respuesta; this.recibido=true;},
      (respuesta: Response) => {this.errorHttp = true; this.recibido=true;}
    )
  }

  agregarLibro(_libroVisto){
    this.LibroClicked.libroVisto(_libroVisto);
  }

  isRecibido() {
    return this.recibido;
  }

  isError() {
    return this.errorHttp
  }

}
