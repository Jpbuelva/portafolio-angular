import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;
  constructor( private http: HttpClient ) {

      // Leer el archivo Json
        this.http.get('assets/data/data-pagina.json')
        .subscribe((resp: InfoPagina ) => {
          this.cargada = true;
          this.info = resp;
          console.log(resp);
        } );

  }

}
