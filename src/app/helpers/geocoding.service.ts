import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { Address } from '../models/address';

@Injectable()
export class GeocodingService {
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.json().errors);
  };
    private _headers: Headers = new Headers({
    'Access-Control-Allow-Origin': '*'
  });

  constructor(
    private http: Http,
  ) { }

  getGeocoding(address: Address) {
    const URL = `${environment.GOOGLE_MAPS_API}?address=${address.exterior_number},+${address.street},+${address.city},+${address.country},+${address.zipcode}&key=${environment.GOOGLE_MAPS_KEY}`;
    return this.http
    .get(URL)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  searchAddress(zipcode): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', environment.GOOGLE_MAPS_KEY);
    params.set('components', `postal_code:${zipcode.toString()}|country:MX`)
    return this.http
      .get(`${environment.GOOGLE_MAPS_API}`, {search: params})
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
