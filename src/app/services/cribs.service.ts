import { Injectable } from '@angular/core';
import{ Http } from '@angular/http';
import { Subject } from 'rxjs/Subject'; // an observer and observable. we can observe and subscribe to it
import 'rxjs/add/operator/map';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();
  constructor(private _http: Http) { }

  getAllCribs() {
    return this._http.get('data/cribs.json')
      .map(res => res.json());

  }

  addCrib(data){
    data.image = 'default-crib'; // placeholder for image
    this.newCribSubject.next(data);
  }

}
