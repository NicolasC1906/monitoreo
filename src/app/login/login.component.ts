import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // email: any;
  // password: any;
  base64: any;
  imageurl:any;


  token: any;
  expires: any;
  idUser: any;
  subscriptions: Subscription[] = [];
  registeredStore: any = [];
  productsArr: any;
  idStore: any;
  idStore2: any;
  idusuarioempleado: any;
  username: any;
  password: any;

  // createFormGroup(){
  //   return new FormGroup({
      
  //       username: new FormControl('',[Validators.required, Validators.minLength(3)]),
  //       password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      
  //   });
  // }
  // loginForm: FormGroup;
  
  
  constructor(
    private service:ApiService,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private fb: FormBuilder,
  ) { 
    // this.loginForm = this.createFormGroup();
  }

  

  ngOnInit(): void {
    this.service.getimage()
    .subscribe((r: any) => {
      // console.log("Esta es la respuesta del api",r)
      this.base64 = 'data:image/png;base64,' + r[0].screenshot
      // console.log(this.imageurl)
      

    })


    
        
  }
    //Call this method in the image source, it will sanitize it.
    transform(){
      return this.domSanitizer.bypassSecurityTrustResourceUrl(this.base64);

  }
  

  login() {
    const user = {username: this.username, password: this.password};
    
    this.service.loginAuth(user).subscribe( data => {
       console.log(data);

      this.idUser = data.user["id"];
      localStorage.setItem("id",data.user["id"])
      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.user.rol);
      this.token = data.token;
      //+ console.log("Esto es R",data);
      
       /*==============================================
                   Dirigir a cuenta
         /*==============================================*/
          window.location.href = '/dashboard';

    },(err) => {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Datos Incorrectos Usuario o Contraseña Incorrectos",
        showConfirmButton: false,
        timer: 1500
    });

    });
  }






  



}
