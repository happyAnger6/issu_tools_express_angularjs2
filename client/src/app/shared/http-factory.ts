import { RequestOptions, Http } from '@angular/http';
import { HttpLogBackendService } from '../services/http-log-backend.service';

export function httpFactory(httpLogBackendService: HttpLogBackendService,
                            requestOptions: RequestOptions): Http {
  return new Http(httpLogBackendService, requestOptions);
}
