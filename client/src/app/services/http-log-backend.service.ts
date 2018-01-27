import { Injectable } from '@angular/core';
import { ConnectionBackend, XHRConnection, XHRBackend, Request} from '@angular/http';
import { HttpLogService} from './http-log.service';

@Injectable()
export class HttpLogBackendService implements ConnectionBackend{

  constructor(private _httpLogService: HttpLogService,
              private _xhrBackend: XHRBackend) {
  }

  createConnection(request: Request): XHRConnection {
    let interceptor = this._httpLogService;

    let req = interceptor.beforeRequest? interceptor.beforeRequest(request): request;
    let result = this._xhrBackend.createConnection(request);

    result.response = interceptor.afterResponse? interceptor.afterResponse(result.response): result.response;

    return result;
  }

}
