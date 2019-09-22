import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
    private _places: Place[] = [
    new Place('p1', 'Mansao', 'Uma descricao legal', 'https://abrilcasa.files.wordpress.com/2018/06/mansaoshakira1.jpg', 149.99),
    new Place('p2', 'Mansao 2', 'Uma descricao legal 2', 'https://abrilcasa.files.wordpress.com/2018/06/mansaoshakira2.jpg', 449.99)
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
