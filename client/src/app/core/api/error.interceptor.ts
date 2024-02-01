import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn, HttpHeaderResponse,
  HttpInterceptorFn, HttpProgressEvent,
  HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent
} from '@angular/common/http';
import {
  catchError,
  delay,
  Observable,
  tap,
  throwError,
  timer,
  from,
  of,
  delayWhen,
  filter,
  first, max, map, BehaviorSubject, Subject, take, switchMap, retry,
  mergeMap,
  concatMap,
} from 'rxjs';

const ErrorInterceptorConfig = {
  maxRetryAttempts: 3,
  delayMs: 20000,
}

const fetchOnError = new Subject<{ req: HttpRequest<unknown>, next: HttpHandlerFn }>();

const fetchOnErrorPipe = fetchOnError.pipe(
  delay(ErrorInterceptorConfig.delayMs),
  concatMap(({ req, next }) => next(req)),
  catchError((error: HttpErrorResponse, obs) => throwError(() => error)),
  retry({
    count: ErrorInterceptorConfig.maxRetryAttempts,
    delay: (_, retryCount) => timer(Math.pow(2, (retryCount)) * ErrorInterceptorConfig.delayMs),
    resetOnSuccess: true,
  })
).subscribe();

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  const retryHttpRequest = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    return next(req).pipe(
      mergeMap(() => timer(ErrorInterceptorConfig.delayMs).pipe(mergeMap(() => []))), // Add a delay before each retry
      retry(ErrorInterceptorConfig.maxRetryAttempts),
    );
  };

  return next(req)
    .pipe(
      catchError((error: HttpErrorResponse, obs) => {
        // TODO: log errors

        if (isServerError(error)) {
          // fetchOnError.next({ req, next });
          // retryHttpRequest(req, next)
          // TODO: refetch N times with D delay time
        }

        return throwError(() => error);
      }),
    );
}

function isServerError(error?: any) {
  return 'status' in error && (error.status === 404 || error.status > 499);
}
