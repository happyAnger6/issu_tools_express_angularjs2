import { Injectable } from '@angular/core';
import { Request, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpLogService {

  constructor() { }

  beforeRequest(req: Request): Request {
    console.log(req);
    return req;
  }

  afterResponse(res: Observable<Response>): Observable<any> {
    res.subscribe((data) => {
      console.log(data);
    });
    return res;
  }
}
