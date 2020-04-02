import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { InformacionComponent } from './informacion/informacion.component';

const rutas: Routes = [
  {path: 'listado-libros', component: LibrosComponent },
  {path: 'informacion/:libroId', component: InformacionComponent},
  {path: 'informacion', redirectTo: '/listado-libros'},
  {path: '', component: InicioComponent, pathMatch: 'full' },
  {path: '**', component: NoEncontradoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    NoEncontradoComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
