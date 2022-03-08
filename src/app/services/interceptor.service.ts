import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs'; 
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service'; 

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

constructor(
  private SpinnerService: SpinnerService
) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.SpinnerService.CallSpinner();
    return next.handle(req).pipe(
      finalize(() => this.SpinnerService.StopSpinner())
    );
  }

}
