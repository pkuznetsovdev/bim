import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {retry} from 'rxjs/operators';

const ErrorInterceptorConfig = {
  maxRetries: 2,
  delayMs: 200,
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry({
        count: ErrorInterceptorConfig.maxRetries,
        delay: (error, retryIndex) => {
          // Retry only if server is unavailable
          if (isServerError(error)) {
            const d = Math.pow(2, retryIndex - 1) * ErrorInterceptorConfig.delayMs;
            return timer(d);
          }

          throw error;
        }
      })
    )
  }
}

function isServerError(error?: any) {
  return error.status && error.status > 499;
}
