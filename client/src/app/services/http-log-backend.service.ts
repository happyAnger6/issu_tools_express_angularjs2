import { Injectable } from '@angular/core';
import { ConnectionBackend, XHRConnection, XHRBackend, Request} from '@angular/http';
import { HttpLogService} from './http-log.service';

@Injectable()
export class HttpLogBackendService implements ConnectionBackend{

  constructor(private _httpLogService: HttpLogService,
              private _xhrBackend: XHRBackend) {
  }

  createConnection(request: Request): XHRConnection {
    const interceptor = this._httpLogService;

    const req = interceptor.beforeRequest ? interceptor.beforeRequest(request): request;
    const result = this._xhrBackend.createConnection(request);

    result.response = interceptor.afterResponse ? interceptor.afterResponse(result.response) : result.response;

    return result;
  }

}
