import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetJsonService {

  constructor(public http:Http) { }

getData(str: string) {
    return this.http.get(str).map((res:Response) => res.json().YOUR_JSON_HEADER);
  }

}
