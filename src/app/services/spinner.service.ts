import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

constructor(
  private SpinnerService: NgxSpinnerService

) { }

      public CallSpinner(){
        this.SpinnerService.show()
      }
      
      public StopSpinner(){
        this.SpinnerService.hide()
      }

      
}
